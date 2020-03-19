const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add({
  name: 'Home',
  pattern: '/',
  page: 'home'
});