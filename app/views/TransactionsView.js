import TransactionView from './TransactionView'

const TransactionsView = Backbone.Marionette.CollectionView.extend({
  childView: TransactionView
})

export default TransactionsView
