// Middleware to check user's role
export const checkRole = (allowedRoles) => {
    return (req, res, next) => {
      const userRole = req.user.role; // From authMiddleware (JWT token)
      
      // Check if the user's role is allowed
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ error: "You don't have permission!" });
      }
      
      next(); // Allow access
    };
  };