const TransactionView = Backbone.Marionette.View.extend({
  template: require('../templates/transaction-view-template.html'),
  initialize: function () {
    if (this.model.get('transaction_date') === undefined) {
      this.model.set('transaction_date', new Date())
    }
  },
  serializeData: function () {
    return {
      amount: round(this.model.get('amount'), 2),
      transaction_date: this.model.get('transaction_date'),
      action: this.model.get('action')
    }
  }
})

function round (value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}

export default TransactionView
