import NavigationView from './NavigationView'

const RootView = Backbone.Marionette.View.extend({
  className: 'main',
  template: require('../templates/root-view-template.html'),
  regions: {
    header: {
      el: '#header-view'
    },
    form: {
      el: '#account-form'
    },
    account: {
      el: '#account-view'
    },
    transaction: {
      el: '#transaction-view'
    }
  },
  initialize: function (options) {
    this.title = options.title
  },
  onRender: function () {
    this.showChildView('header', new NavigationView({ title: this.title }))
  }
})

export default RootView
