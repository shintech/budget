import Account from '../models/Account'

const Accounts = Backbone.Collection.extend({
  model: Account,
  url: 'http://dev.shintech.ninja:8000/accounts'
})

export default Accounts
