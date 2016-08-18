angular
    .module('episodesList')
    .component('episodesList', {
        template:'<div class="row" ng-repeat="episode in $ctrl.episodes"><div class="col s12 m3"><div class="card"><div class="card-image"><img ng-src="{{episode.thumbnail}}"><span class="card-title">{{episode.name}}</span></div><div class="card-action"><a ng-href="#!/episode/{{episode._id}}">Read episode</a></div></div></div></div>',        
        controller: ['$routeParams', 'Episodes',
            function EpisodesListController($routeParams, Episodes) {
                var self = this;
                this.episodes = Episodes.query({seriesId: $routeParams.seriesId}).$promise.then(function (result) {
                    self.episodes = result.episodes;
                });
            }
        ]
    });