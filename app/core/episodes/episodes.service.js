'use strict'

angular
    .module('core.episodes')
    .factory('Episodes', ['$resource',
        function($resource) {
            return $resource('https://webcomicr.herokuapp.com/getSeries/:seriesId', {}, {
                query: {
                    method: 'GET',
                    isArray: false
                }
            });
        }
    ])