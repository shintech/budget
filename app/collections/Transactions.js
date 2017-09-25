import Transaction from '../models/Transaction'

const Transactions = Backbone.Collection.extend({
  url: 'http://localhost:8000/transactions',
  model: Transaction,
  parse: function (data) {
    return data.body
  }
})

export default Transactions
