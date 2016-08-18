angular
    .module('episodesList')
    .component('episodesList', {
        template:'BAUBAU<div class="row" ng-repeat="episode in $ctrl.episodes"><div class="col s12 m3"><div class="card"><div class="card-image"><img ng-src="{{episode.thumbnail}}"><span class="card-title">{{episode.name}}</span></div><div class="card-action"><a ng-href="#!/seriesList/{{episode._id}}">Read episode</a></div></div></div></div>',        
        controller: ['$routeParams', 'Episode',
            function EpisodesListController($routeParams, Episode) {
                this.episodes = Episode.query({seriesId: $routeParams.seriesId}).$promise.then(function (result) {
                    this.episodes = result.episodes;
                });
            }
        ]
    });