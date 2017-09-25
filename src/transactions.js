export default function getAllRoutes (options) {
  const { db, logger } = options

  const queries = {}

  queries.getTransactions = (req, res) => {
    db.any('SELECT * FROM transactions')
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

  queries.createTransaction = (req, res) => {
    db.none('INSERT INTO transactions( amount, action )' + 'VALUES( ${amount}, ${action} )', req.body) // eslint-disable-line
    .then(() => {
      res.status(200)
      .json({
        body: 'success'
      })
    })
  }

  return queries
}
