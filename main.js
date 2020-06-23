$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mineCanvas')) ;

    /*var c;
    for (var i = 15; i < 400; i+=25) {
        for (var j = 15; j < 400; j+=25) {
            c = Shape.Circle(i, j, 10);
            c.fillColor = 'green';              
        }
              
    }*/

    var tool = new Tool();
    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';
    }

    paper.view.draw();
    console.log('main.js loaded');
});