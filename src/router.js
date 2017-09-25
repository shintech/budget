import express from 'express'
import account from './account'
import transaction from './transactions'

const router = express.Router()

export default function getRouter (options) {
  router.route('/account/:id')
  .get(account(options).getAccount)
  .put(account(options).transaction)

  router.route('/account/new')
  .post(account(options).createAccount)

  router.route('/account/:id/credit')
  .post(account(options).credit)

  router.route('/account/:id/debit')
  .post(account(options).debit)

  router.route('/transactions')
  .get(transaction(options).getTransactions)
  .post(transaction(options).createTransaction)

  return router
}
