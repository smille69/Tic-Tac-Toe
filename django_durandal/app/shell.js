define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            return router.map([
                { route: ['', 'tictactoe'],             moduleId: 'tictactoe/index',        title: 'Tic Tac Toe',       nav: true }
            ]).buildNavigationModel()
              .mapUnknownRoutes('tictactoe/index', 'not-found')
              .activate();
        }
    };
});