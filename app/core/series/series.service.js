'use strict'

angular
    .module('core.series')
    .factory('Series', ['$resource',
        function($resource) {
            return $resource('https://webcomicr.herokuapp.com/getSeriesList/', {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            });
        }
    ])