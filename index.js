const data = [
  {width: 200, height: 100, fill: 'purple'},
  {width: 100, height: 60, fill: 'pink'},
  {width: 50, height: 30, fill: 'red'},
  {width: 30, height: 20, fill: 'green'}
];

// select the svg conatiner first
const svg = d3.select('svg');

// join the data to rects
const rects = svg.selectAll('rect')
  .data(data);

console.log(rects) 

// add attrs to rects already in the DOM
rects.attr('width', d => d.width)
  .attr('height', d => d.height)
  .attr('fill', d => d.fill);

// append the enter selection to the DOM
const added = rects.enter()  //The Enter Selection : create virtual element
  .append('rect')
    .attr('width', d => d.width)
    .attr('height', d => d.height)
    .attr('fill', d => d.fill);
