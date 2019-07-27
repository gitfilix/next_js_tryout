const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
    const server = express()

    // special
    server.get('/portfolioDynamicLink/:id', (req, res) => {
        const actualPage = '/portfolio'
        // query param for id of portfolio in case of refresj
        const queryParams = { id: req.params.id }
        app.render( req, res, actualPage, queryParams)
    })

    // all other routes
    server.get('*', (req, res) => {
        return handle(req, res);
    })

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    })
})
