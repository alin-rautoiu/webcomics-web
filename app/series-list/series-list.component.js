angular
    .module('seriesList')
    .component('seriesList', {
        template: '<div class="row" ng-repeat="series in $ctrl.seriesList"><div class="col s12 m3"><div class="card"><div class="card-image"><img ng-src="{{series.thumbnail}}"><span class="card-title">{{series.name}}</span></div><div class="card-action"><a ng-href="#!/episodesList/{{series._id}}">Go to series</a></div></div></div></div>',      
        controller: ['Series',
            function SeriesListController(Series) {
                this.seriesList = Series.query();
            }
        ]
    });