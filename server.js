'use strict'

const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
	const url = req.url
	res.render('index', {url})
})

app.get('/about', (req, res) => {
	const date = new Date()
	const url = req.url
	res.render('about', {date, url})
})

app.get('/inventory', (req, res) => {
	const url = req.url
	res.render('inventory', {goods, url})
})

app.listen(5000, function() {
	console.log('listening on port 5000')
})

const goods = [
	{name: 'Item 1', price: '$1.00'},
	{name: 'Item 2', price: '$2.00'},
	{name: 'Item 3', price: '$3.00'},
	{name: 'Item 4', price: '$4.00'},
	{name: 'Item 5', price: '$5.00'}
]
