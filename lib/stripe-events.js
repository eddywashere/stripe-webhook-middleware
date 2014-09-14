'use strict';

module.exports = exports = {
  'account.updated': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'account.application.deauthorized': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'application_fee.created': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'application_fee.refunded': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'balance.available': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'charge.succeeded': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'charge.failed': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'charge.refunded': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'charge.captured': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'charge.updated': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'charge.dispute.created': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'charge.dispute.updated': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'charge.dispute.closed': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'customer.created': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'customer.updated': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'customer.deleted': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'customer.card.created': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'customer.card.updated': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'customer.card.deleted': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'customer.subscription.created': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'customer.subscription.updated': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'customer.subscription.deleted': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'customer.subscription.trial_will_end': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'customer.discount.created': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'customer.discount.updated': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'customer.discount.deleted': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'invoice.created': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'invoice.updated': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'invoice.payment_succeeded': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'invoice.payment_failed ': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'invoiceitem.created': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'invoiceitem.updated': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'invoiceitem.deleted': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'plan.created': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'plan.updated': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'plan.deleted': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'coupon.created': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'coupon.deleted': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'recipient.created': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'recipient.updated': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'recipient.deleted': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'transfer.created': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'transfer.updated': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'transfer.paid': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'transfer.failed': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  },
  'ping': function(stripeEvent, res) {
    console.log(stripeEvent.type + ': event processed');
    res.status(200).end();
  }
};