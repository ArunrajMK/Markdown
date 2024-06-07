const { Router } = require("express");
const router = Router();

router.post("/", async (req, res) => {
  const html = req.body.html
  console.log("html",html)
  try {
    res.json({
      success: true,
      message:"Success",
      response:html
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});



module.exports = router;