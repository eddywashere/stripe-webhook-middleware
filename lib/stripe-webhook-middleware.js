'use strict';

var util = require('util'),
EventEmitter = require('events').EventEmitter;

function StripeWebhook (options) {
  EventEmitter.call(this);

  var self = this,
  options = options || {},
  error;

  if (!options.stripeApiKey){
    this.emit('err', new Error('API Key Not Found'));
  }

  this.stripe = require('stripe')(options.stripeApiKey);

  this.middleware = function(req, res, next) {
    if(!req.body || req.body.object !== 'event' || !req.body.id) {
      error = new Error('Event data not included');
      error.status = 400;
      self.emit('err', error);
      next(error);
    }
    // handle web hook testing from stripe
    if (req.body.id === 'evt_00000000000000'){
      self.emit('testWebhook', req.body);
      return res.status(200).end();
    }

    self.stripe.events.retrieve(req.body.id, function(err, event){

      if(err) {
        if(err.type === 'StripeAuthenticationError') {
          err.status = 401;
        } else {
          err.status = 500;
        }
        self.emit('err', err);
        next(err);
      }

      if(!event){
        error = new Error('Stripe event not found');
        error.status = 400;
        self.emit('err', error);
        next(error);
      }

      self.emit('event', event);

      if(options.events && options.events[event.type]){
        options.events[event.type](event, res);
      } else if (options.respond) {
        req.stripeEvent = event;
        next();
      } else {
        res.status(200).end();
      }
    });
  };
}

util.inherits(StripeWebhook, EventEmitter);

module.exports = StripeWebhook;