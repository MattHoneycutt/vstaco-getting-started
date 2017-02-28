(function (undefined) {

    angular.module('app')
        .component('home',
        {
            templateUrl: '/app/home/home.template.html',
            controller: controller,
            controllerAs: 'vm'
        });

    function controller(config) {
        const vm = this;

        vm.config = config;
    }
})();