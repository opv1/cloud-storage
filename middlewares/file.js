export default (path) => {
  return function (req, res, next) {
    req.filePath = path

    next()
  }
}
