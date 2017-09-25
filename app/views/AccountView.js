const AccountView = Backbone.Marionette.View.extend({
  template: require('../templates/account-view-template.html'),
  modelEvents: {
    'change': 'render'
  },
  serializeData: function () {
    return {
      balance: round(this.model.get('balance'), 2)
    }
  }
})

function round (value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}

export default AccountView
