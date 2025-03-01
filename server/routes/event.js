import express from "express";
import authMiddleware from "../middleware/auth.js";
import { checkRole } from "../middleware/roles.js"; 

const router = express.Router();
router.use(authMiddleware);

router.post("/", async (req, res) => {
  res.json({ message: "Event created!" });
});


router.delete(
  "/:id",
  authMiddleware,
  checkRole(["Admin"]),
  async (req, res) => {
    // Delete event logic here
  }
);
module.exports = router;