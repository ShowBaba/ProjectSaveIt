const homeRoute = (app) => {
    app.get('/', (req, res) => {
        res.redirect('/notes');
    });
    app.get('/', (req, res) => {
        res.status(200).json({
            message: 'Welcome to Project Save It',
        });
    });
};
module.exports = homeRoute;