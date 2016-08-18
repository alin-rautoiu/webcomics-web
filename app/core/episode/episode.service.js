'use strict';

angular
    .module('core.episode')
    .factory('Episode', ['$resource', function($resource) {
        return $resource('https://webcomicr.herokuapp.com/getEpisode/', {}, {'query' : {method: 'GET', isArray: false}})
    }]);