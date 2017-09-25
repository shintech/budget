const Account = Backbone.Model.extend({
  initialize: function () {
    this.urlRoot = 'http://localhost:8000/account'
  },
  parse: function (data) {
    return data.body
  }
})

export default Account
