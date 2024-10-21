const adminMail = process.env.ADMIN_MAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

const adminLoginController = (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === adminMail && password === adminPassword) {
      return res.status(200).send({ message: "Login successful" });
    } else {
      return res.status(401).send({ message: "Invalid email or password" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = adminLoginController;
