import React from 'react';
import ReactDOM from 'react-dom';
import Notes from './app/Notes.js'

let express = require('express')
let app = express()



ReactDOM.render(<Notes />, document.getElementById('app'))
