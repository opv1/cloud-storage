export const filePathMiddleware = (path) => {
  return function (req, res, next) {
    req.filePath = path

    next()
  }
}

export const staticPathMiddleware = (path) => {
  return function (req, res, next) {
    req.staticPath = path

    next()
  }
}
