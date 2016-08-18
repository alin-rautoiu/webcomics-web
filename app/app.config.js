angular
    .module('app')
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/seriesList', {
                    template: '<series-list></series-list>'
                })
                .when('/episodesList/:seriesId', {
                    template: '<episodes-list></episodes-list>'
                })
        }
    ]);