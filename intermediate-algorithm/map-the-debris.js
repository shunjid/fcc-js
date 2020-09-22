/*
** T = 2π √((avgAlt+earthRadius)^3 / GM)
*/
const orbitalPeriod = function(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map((obj) => {
    const period = 2*Math.PI * Math.sqrt(Math.pow(obj.avgAlt + earthRadius, 3)/GM);

    return {
      name: obj.name,
      orbitalPeriod: Math.round(period)
    }
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
