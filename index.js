const data = [
  {width: 200, height: 100, fill: 'purple'}
];

// select the svg container first
const svg = d3.select('svg');

svg.select('rect')
  .data(data)
  .attr('width', (d,i,n) => {
    console.log(this)    
    console.log(n[i])  // grab the current element  
    d.width})
  .attr('height', function(d){
    console.log(this)  
    d.height } )
  .attr('fill', d => d.fill);


