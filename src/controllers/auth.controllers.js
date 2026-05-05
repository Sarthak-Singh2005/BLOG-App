const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
async function registerUserController(req, res) {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide email and password",
      });
    }

    // Check existing user
    const isUserAlreadyExists = await userModel.findOne({ email });

    if (isUserAlreadyExists) {
      return res.status(400).json({
        message: "Account already exists",
      });
    }

    // Hash password
    const hash = await bcrypt.hash(password, 10);

    // Create user
    const user = await userModel.create({
      email,
      password: hash,
    });

    // Generate token (removed username)
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Set cookie (improved)
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true in production
    });

    // Response
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        email: user.email,
      },
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}
async function Login(req,res){
    try{
    const {email, password} = req.body;
    if (!email || !password) {
  return res.status(400).json({
    message: "Please provide email and password",
  });
}
    const user = await userModel.findOne({email})
    if(!user){
      return res.status(400).json({
        message: "email or password not found",
      })
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
      return res.status(400).json({
        message:"email or password not found",
      })
    }
    const token = jwt.sign(
      {id: user._id},
      process.env.JWT_SECRET,
      {expiresIn:"1d"}
    )
    res.cookie("token",token,{httpOnly: true});
    res.status(200).json({
      message:"Login Successfully",
    })
  }catch(err){
    return res.status(500).json({
      message: "Server Error",
    });
  }

  }
module.exports = { registerUserController, Login};