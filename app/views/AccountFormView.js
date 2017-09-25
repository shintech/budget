import Transaction from '../models/Transaction'

const AccountFormView = Backbone.Marionette.View.extend({
  template: require('../templates/account-form-template.html'),
  tagName: 'form',
  events: {
    'click .submit': 'handleForm'
  },

  handleForm: function (e) {
    e.preventDefault()
    var collection = this.collection
    var action = $('[name="account-radio"]:radio:checked').val()
    var amount = $('#amount_input').val()

    if (action === 'credit') {
      this.model.set('balance', parseFloat(this.model.get('balance')) + parseFloat(amount))
    } else if (action === 'debit') {
      this.model.set('balance', parseFloat(this.model.get('balance')) - parseFloat(amount))
    }
    this.model.save([], {
      success: () => {
        var transaction = new Transaction({ amount: amount, action: action })
        transaction.save([], {
          success: () => {
            collection.add(transaction)
            $('#amount_input').val('')
          }
        })
      }
    })
  }
})

export default AccountFormView
