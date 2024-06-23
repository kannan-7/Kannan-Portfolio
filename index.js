const express = require("express");
const app = express();
const PORT = 8888;
const path = require("path");

app.use(express.static("public"));

app.get("/", function (req, res) {
  const homePath = path.join(__dirname, "views", "index.html");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(homePath);
});

app.get("/about", function (req, res) {
  const aboutPath = path.join(__dirname, "views", "about.html");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(aboutPath);
});

app.get("/skills", function (req, res) {
  const skillsPath = path.join(__dirname, "views", "skills.html");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(skillsPath);
});

app.get("/visionary", function (req, res) {
  const visionaryPath = path.join(__dirname, "views", "visionary.html");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(visionaryPath);
});

app.get("/project", function (req, res) {
  const projectPath = path.join(__dirname, "views", "project.html");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(projectPath);
});

app.get("/contact", function (req, res) {
  const contactPath = path.join(__dirname, "views", "contact.html");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(contactPath);
});

app.get("*", function (req, res) {
  const notFoundPath = path.join(__dirname, "views", "404.html");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(notFoundPath);
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
