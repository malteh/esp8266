$( document ).ready(function() {
  $.getJSON( "http://192.168.1.219/status", function( data ) {
    var jscolor = document.getElementById('jscolor').jscolor;
    jscolor.rgb[0] = data.r;
    jscolor.rgb[1] = data.g;
    jscolor.rgb[2] = data.b;
    document.body.style.backgroundColor = '#' + jscolor
  });
});

function rainbow() {
  $.getJSON( "http://192.168.1.219/rainbow", function( data ) {
  });
}

function update(jscolor) {
    // 'jscolor' instance can be used as a string
    document.body.style.backgroundColor = '#' + jscolor
    var r = Math.round(jscolor.rgb[0]);
    var g = Math.round(jscolor.rgb[1]);
    var b = Math.round(jscolor.rgb[2]);
    $.getJSON( "http://192.168.1.219/color?r=" + r + "&g=" + g + "&b=" + b, function( data ) {
      //alert( "Load was performed." );
    });
}
