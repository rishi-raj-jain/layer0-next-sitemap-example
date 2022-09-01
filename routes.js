// This file was automatically added by layer0 deploy.
// You should commit this file to source control.
const { Router } = require('@layer0/core/router')
const { nextRoutes, renderNextPage } = require('@layer0/next')

module.exports = new Router()
    .get('/sitemap', ({ redirect }) => {
        redirect('/sitemap.xml', 301)
    })
    .get('/sitemap.xml', (res) => {
        renderNextPage('/sitemap', res)
    })
    .use(nextRoutes) // automatically adds routes for all files under /pages
