const extractId = (req, res, next) => {
    const id = req.query.id;
    if (id) {
      req.id = id;
      next();
    } else {
      res.status(400).json({ message: "Missing id parameter" });
    }
  };
  
module.exports = { extractId };
