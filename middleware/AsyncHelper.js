export default (fn) => {
  return (req, res) => {
    fn(req, res).catch((err) => {
      res.send({
        status: 'error',
        message: err.message
      })
    })
  }
}
