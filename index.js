const data = [
  {width: 300, height: 100, fill: 'purple'}
];

// select the svg container first
const svg = d3.select('svg');

svg.select('rect')
  .data(data) //d for data
  .attr('width', function(d,i,n){ 
    console.log(i)   // index of this element
    console.log(n)   // the current selection
    return d.width })
  .attr('height', function(d){ return d.height })
  .attr('fill', function(d){ return d.fill });


