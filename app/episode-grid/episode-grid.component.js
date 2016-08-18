angular
    .module('episodeGrid')
    .component('episodeGrid', {
        template:'<div class="row" ng-repeat="row in $ctrl.rows"><div ng-repeat="panel in row.panels"><div class="col s12 m{{panel.colspan * (12 / $ctrl.numColumns)}}"><img ng-src="{{panel.path}}"></div></div></div>',        
        controller: ['$routeParams', 'Episode',
            function EpisodeGridController($routeParams, Episode) {
                var self = this;
                this.episode = Episode.query({episodeId: $routeParams.episodeId}).$promise.then(function (result) {
                    self.images = result.images;
                    self.numRows = result.row;
                    self.numColumns = result.columns;
                    self.rows = [];                    
                    for (var row = 0; row < self.numRows; row++) {
                        var columns = [];
                        for (var col = 0; col < self.numColumns; col++) {
                            columns.push(self.images[row * self.numColumns + col]);
                        }                        
                        self.rows.push({panels: columns});
                    }
                    console.log(self.rows);
                });
            }
        ]
    });