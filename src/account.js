export default function getAllRoutes (options) {
  const { db, logger } = options

  const queries = {}

  queries.getAccount = (req, res) => {
    const accountId = parseInt(req.params.id)

    db.one('SELECT balance FROM account WHERE id = $1', [accountId])
    .then(result => {
      res.status(200)
      .json({
        body: result
      })
    })
    .catch(err => {
      logger.error(err)
    })
  }

  queries.createAccount = (req, res) => {
    db.none('INSERT INTO account( balance )' + 'VALUES( ${balance} )', req.body) // eslint-disable-line
    .then(() => {
      res.status(200)
      .json({
        body: 'success'
      })
    })
    .catch(err => {
      logger.error(err)
    })
  }

  queries.transaction = (req, res) => {
    const accountId = parseInt(req.params.id)
    var balance = parseFloat(req.body.balance)

    db.none('UPDATE account SET balance = $1 WHERE id = $2', [balance, accountId])
    .then(() => {
      res.status(200)
      .json({
        body: 'success'
      })
    })
  }

  queries.credit = (req, res) => {
    const accountId = parseInt(req.params.id)
    var credit = parseFloat(req.body.credit)

    db.none('UPDATE account SET balance = balance + $1 WHERE id = $2', [credit, accountId])
    .then(() => {
      res.status(200)
      .json({
        body: 'success'
      })
    })
  }

  queries.debit = (req, res) => {
    const accountId = parseInt(req.params.id)
    var debit = parseFloat(req.body.debit)

    db.none('UPDATE account SET balance = balance - $1 WHERE id = $2', [debit, accountId])
    .then(() => {
      res.status(200)
      .json({
        body: 'success'
      })
    })
  }

  return queries
}
