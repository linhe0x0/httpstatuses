const ghpages = require('gh-pages')

const token = process.env.GH_TOKEN
const message = new Date().toLocaleString()

if (!token) return console.error(new Error('Invalid token.'))

ghpages.publish('build', {
  repo: `https://${token}@github.com/sqrthree/httpstatuses.git`,
  message: `:sparkles: Auto generated at ${message}`,
}, (err) => {
  if (err) return console.error(err)

  console.log('Published.')
})
