'use strict'

// Vendor
const ozymandias = require('ozymandias')

// The App!
const app = module.exports = ozymandias()

// Routes
app.get('/', (req, res) => res.render('index'))
app.use('/.well-known/acme-challenge', require('./routes/acme'))

// 404
app.get('*', (req, res) => res.status(404).render('404'))

// 500
app.use((e, req, res, next) => {
  console.log(e.stack)
  res.status(500).render('500')
})
