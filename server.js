// Require express & inquirer
const express = require('express');
const inquirer = require('inquirer');
// Require other pages that will be used

// Port & Express
const PORT = process.env.PORT || 8080;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// startQuestion Function

// function startQuestions() {

// }








//   Not Found default response
app.use((req, res) => {
    res.status(404).end();
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});