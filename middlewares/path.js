class PathMiddleware {
  filePath(path) {
    return function (req, res, next) {
      req.filePath = path

      next()
    }
  }

  staticPath(path) {
    return function (req, res, next) {
      req.staticPath = path

      next()
    }
  }
}

const pathMiddleware = new PathMiddleware()

export default pathMiddleware
