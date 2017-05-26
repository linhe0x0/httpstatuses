const ghpages = require('gh-pages')

const token = process.env.GH_TOKEN

if (!token) return console.error(new Error('Invalid token.'))

ghpages.publish('build', {
  repo: `https://${GH_TOKEN}@github.com/sqrthree/httpstatuses.git`
}, () => {
  console.log('Published.')
})
