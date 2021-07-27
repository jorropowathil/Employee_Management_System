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