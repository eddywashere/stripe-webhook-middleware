'use strict';

var stripeEvents = require('./stripe-events.js');

module.exports.init = function(app, options) {
  options = options || {};

  if (!options.stripeApiKey){
    throw new Error('API Key Not Found');
  }

  var stripe = require('stripe')(options.stripeApiKey);

  var validateEvent = function(req, res, next) {

    // first, make sure the posted data looks like we expect
    if(req.body.object!=='event') {
      return res.status(400).end(); // respond with HTTP bad request
    }

    // we only care about the event id - we use it to query the Stripe API
    stripe.events.retrieve(req.body.id, function(err, event){
      // the request to Stripe was signed - so if the event id is invalid
      //  (eg it doesnt belong to our account), the API will respond with an error,
      //  & if there was a problem on Stripe's side, we might get no data.
      if(err || !event) {
        console.log(err);
        return res.status(401).end(); // respond with HTTP forbidden
      }

      // store the validated, confirmed from Stripe event for use by our next middleware
      req.stripeEvent = event;
      next();
    });
  };

  var processEvent = function(req, res) {
    var stripeEvent = req.stripeEvent;
    if(stripeEvents[stripeEvent.type]){
      console.log(stripeEvent.type + ' webhook was found');
      stripeEvents[stripeEvent.type](stripeEvent, res);
    } else {
      console.log('Unhandled stripe event: ' + stripeEvent.type);
      res.status(200).end();
    }

  };

  return [validateEvent, processEvent];
};