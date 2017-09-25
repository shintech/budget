import Marionette from 'marionette'
import Account from './models/Account'
import AccountView from './views/AccountView'
import AccountFormView from './views/AccountFormView'
import Transactions from './collections/Transactions'
import TransactionsView from './views/TransactionsView'

const Controller = Marionette.Object.extend({
  initialize: function (options) {
    this.app = options.app
  },

  index: function () {
    var account = new Account({ id: 1 })
    var transactions = new Transactions()
    account.fetch({
      success: (result) => {
        this.app.view.showChildView('account', new AccountView({ model: account }))
        this.app.view.showChildView('form', new AccountFormView({ model: account, collection: transactions }))
      },
      error: (err) => {
        console.log(err)
      }
    })

    transactions.fetch({
      success: (result) => {
        this.app.view.showChildView('transaction', new TransactionsView({ collection: result }))
      }
    })
  }
})

export default Controller
