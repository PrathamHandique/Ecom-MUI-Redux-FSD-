const adminMail = process.env.ADMIN_MAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

const adminLoginController = (req, res) => {
  try {
    const { email, password } = req.body;
    //console.log("Request email: ", email);
    //console.log("Request password: ", password);
    if (email === adminMail && password === adminPassword) {
      return res.status(200).send({ message: "Login successful" });
    } else {
      return res.status(401).send({ message: "Invalid email or password" });
    }
  } catch (err) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = adminLoginController;
