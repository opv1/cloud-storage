export const filePath = (path) => {
  return function (req, res, next) {
    req.filePath = path

    next()
  }
}

export const staticPath = (path) => {
  return function (req, res, next) {
    req.staticPath = path

    next()
  }
}
