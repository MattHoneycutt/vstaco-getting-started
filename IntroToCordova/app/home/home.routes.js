(function (undefined) {

    angular.module('app').config($stateProvider => {
        $stateProvider
            .state('home',
            {
                url: '/home',
                template: '<home>'
            })
            .state('about',
            {
                url: '/about',
                templateUrl: '/app/home/about.template.html'
            })
            .state('links',
            {
                url: '/links',
                templateUrl: '/app/home/links.template.html'
            });
    });

})();