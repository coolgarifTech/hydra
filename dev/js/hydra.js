var points_on_a_circle = function( n ) {
  var arr = [],
      PI2 = Math.PI * 2,
      dn  = PI2 / n;
  for (var i = n - 1; i >= 0; i--) {
    var rad = i * dn;
    arr.push( { x : Math.sin(rad), y : Math.cos(rad) } );
  }
  return arr;
};

var evenly_spaced_points_on_a_circle = function( num_points, radius, centre_x, centre_y ) {
  return _.map( points_on_a_circle( num_points ), function( coords ) {
    coords.x = ( coords.x * radius ) + centre_x;
    coords.y = ( coords.y * radius ) + centre_y;
    return coords;
  } );
};

function decorate_with_non_presentational_links ( links ) {
  var children_by_parent = _.groupBy( links, function( link ) {
    return link.source;
  } );

  var non_displaying_links = _.flatten(
    _.map( children_by_parent, function( children_of_parent ) {
      var n = children_of_parent.length;
      var arr = [];
      for( var i = 0; i < n; i++ ) {
        for( var j = i + 1; j < n; j++ ) {
          arr.push( { source : children_of_parent[i].target, target : children_of_parent[j].target, invisible : true } );
        }
      }
      return arr;
    } )
  );

  // merge presentational and non-presentational links
  var return_arr = links.concat( non_displaying_links );
  return return_arr;
}

var warped_control_point = function( d ) {
  var x_weight = 20,
      y_weight = 1.1;

  var dx = ( d.target.x - d.source.x ) / x_weight,
      dy = ( d.target.y - d.source.y ) / y_weight;

  return ( d.source.x + dx )+','+( d.source.y + dy );
};

var path_from_data = function( d ) {
  return 'M'+d.source.x+','+d.source.y+' Q'+warped_control_point(d)+' '+d.target.x+','+d.target.y;
};