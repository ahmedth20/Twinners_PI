const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Extract the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
      req.user = decoded;
      req.role = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

const verifymedecin = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Extract the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
      req.user = decoded;
      req.role = decoded;
      console.log(req.role.role);
      if (req.role.role !== "medecin") {
        return res.status(403).json({ message: "Not authorized, only medecins can access this route" });
      }
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

const protectsession = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({ message: "Session expirée, veuillez vous reconnecter" });
  }
};

module.exports = { protect, protectsession, verifymedecin };
