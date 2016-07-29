'use strict';

angular.module('app.home').controller('HomeController', function ($scope, DTOptionsBuilder, DTColumnBuilder) {

    this.standardOptions = DTOptionsBuilder
        .fromSource('api/tables/datatables.standard.json')
         //Add Bootstrap compatibility
        .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
            "t" +
            "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
        .withBootstrap();
    this.standardColumns = [
        DTColumnBuilder.newColumn('id').withClass('text-danger'),
        DTColumnBuilder.newColumn('name')
    ];

    this.selectItem = function(item) {
        alert(item.name);
    };

    angular.element(document.querySelector('#dt-grid')).on('click', function(item) {
        alert(item);
        // Do processing here to display the other grid
    });

});
