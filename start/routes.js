'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
'use strict'

const Route = use('Route')
const GraphqlAdonis = use('ApolloServer')
const schema = require('../data/schema');

Route.route('/graphql', ({ request, auth, response }) => {
    return GraphqlAdonis.graphql({
      schema,
      context: { auth }
    }, request, response)
}, ['GET', 'POST'])

Route.get('/graphiql', ({ request, response }) => {
    return GraphqlAdonis.graphiql({ endpointURL: '/graphql' }, request, response)
})
