const colorArray = [
    '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
];
const body = document.body;
const svg = document.getElementById('eddie');
const change = document.getElementsByClassName('change');
// const bodyColor = document.getElementById('bodyColor');
// const svgColor = document.getElementById('svgColor');

document.addEventListener('visibilitychange', function (event){ document.hidden ? color() : setTimeout(hideColor, 500) } );

function random(num){ return Math.floor(Math.random()*num) }

function color(){
    for(let i=0; i<change.length;i+=1){
        change[i].style.WebkitTransitionDuration='0s';
    }
    let bgPickColor = random(colorArray.length);
    let svgPickColor = random(colorArray.length);

    if(bgPickColor==svgPickColor){
        svgPickColor = random(colorArray.length);
    }

    body.style.backgroundColor = colorArray[bgPickColor];
        // bodyColor.innerHTML = colorArray[bgPickColor];
        // bodyColor.style.color = colorArray[bgPickColor];
    svg.style.fill = colorArray[svgPickColor];
        // svgColor.innerHTML = colorArray[svgPickColor];
        // svgColor.style.color = colorArray[svgPickColor];
}

function hideColor(){
    for(let i=0; i<change.length;i+=1){
        change[i].style.animationTimingFunction = 'linear';
        change[i].style.WebkitTransitionDuration = '300ms';
    }
    body.style.backgroundColor = '#FFFFFF';
    svg.style.fill = '#000000';
}