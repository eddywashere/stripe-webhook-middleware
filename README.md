# Stripe Webhook Middleware

Node.js middleware for processing stripe webhooks. Inspired by: [http://gaarf.info/2013/06/25/securing-stripe-webhooks-with-node-js/](securing stripe webhooks with nodejs) & [https://github.com/ruffrey/stripe-webhook-server](stripe-webhook-server).

Currently this middleware only validates events that are sent to it.

Upcoming features include transactional emails, custom templates and support for callbacks (ex: looking up user info by customer data).


### Example Usage

Install node dependencies:

```
npm install express body-parser stripe-webhook-middleware
```

Create `app.js`:

```js
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var stripeMiddleware = require('stripe-webhook-middleware');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/stripe', stripeMiddleware.init(app, {
  stripeApiKey: 'your-private-api-key'
}));

app.listen(3000);
```

Run it with `node app.js`. 

Deploy it and add the url to your accounts webhooks - [https://dashboard.stripe.com/account/webhooks](https://dashboard.stripe.com/account/webhooks).

### Supported Stripe Events

- account.updated
- account.application.deauthorized
- application_fee.created
- application_fee.refunded
- balance.available
- charge.succeeded
- charge.failed
- charge.refunded
- charge.captured
- charge.updated
- charge.dispute.created
- charge.dispute.updated
- charge.dispute.closed
- customer.created
- customer.updated
- customer.deleted
- customer.card.created
- customer.card.updated
- customer.card.deleted
- customer.subscription.created
- customer.subscription.updated
- customer.subscription.deleted
- customer.subscription.trial_will_end
- customer.discount.created
- customer.discount.updated
- customer.discount.deleted
- invoice.created
- invoice.updated
- invoice.payment_succeeded
- invoice.payment_failed 
- invoiceitem.created
- invoiceitem.updated
- invoiceitem.deleted
- plan.created
- plan.updated
- plan.deleted
- coupon.created
- coupon.deleted
- recipient.created
- recipient.updated
- recipient.deleted
- transfer.created
- transfer.updated
- transfer.paid
- transfer.failed
- ping

### [LICENSE](LICENSE.md)