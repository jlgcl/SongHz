var express = require('express')
var router = express.Router()
var { body, vadliationResult, sanitizeBody } = require('express-validator')
const pool = require('../db/index')
