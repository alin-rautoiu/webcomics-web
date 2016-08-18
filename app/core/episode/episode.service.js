'use strict'

angular
    .module('core.episode')
    .factory('Episode', ['$resource',
        function($resource) {
            return $resource('https://webcomicr.herokuapp.com/getSeries/:seriesId', {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            });
        }
    ])