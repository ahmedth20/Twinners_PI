const express = require("express");
const {
  authUser, updateUserProfile, getUserProfile, forgetpass,getUserProfile1,resetpass1,
  authUserfacebook, registerUserfacebook,registerUser,authUserbackoff,authUserfrontoff,
  logoutUser, authUsergoogle, registerUsergoogle, resetpass, getAllUsers, uploadProfileImage
} = require("../controllers/userController.js");

const { protect, verifymedecin, protectsession } = require("../middleware/authMiddleware.js");
const upload = require("../middleware/uploadMiddleware.js"); 




const router = express.Router();
//router.post('/',upload.single('picture'), registerUser);

router.post('/',registerUser);
router.post('/google', registerUsergoogle);
router.post('/facebook', registerUserfacebook);

router.post('/auth', authUser);
router.post('/authfront', authUserfrontoff);

router.post('/authback', authUserbackoff);

router.post('/authg', authUsergoogle);
router.post('/authf', authUserfacebook);

router.post('/getmail', resetpass);
router.post('/getmail1', resetpass1);

router.post('/reset-password/:id', forgetpass);
router.post('/upload', upload.single('image'), (req, res) => {
  try {
  res.json({ imageUrl: req.file.path }); // Retourne l'URL Cloudinary
  } catch (error) {
  res.status(500).json({ error: error.message });
  }
});
router.post('/logout', logoutUser);
router.route('/profile')
  .get(protect,verifymedecin,protectsession, getUserProfile)
  //.put(protect, updateUserProfile);
    .put( updateUserProfile);
    router.put('/editprofile/:id',upload.single('picture'),updateUserProfile);
    router.get('/getprofile/:id',getUserProfile1);

module.exports = router;
