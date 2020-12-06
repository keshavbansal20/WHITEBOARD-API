const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let { top : topoffSet} = canvas.getBoundingClientRect();

canvas.height = window.innerHeight - topoffSet;

canvas.width = window.innerWidth;

window.addEventListener("resize" , function(){
    canvas.height = window.innerHeight - topoffSet;
    canvas.width = window.innerWidth;
    drawPoints(); 
})

let isPenDown = false;

let pointsDb = [];
let redoPoints  = [];

let line = [];

canvas.addEventListener("mousedown", function(e){
    if(redoPoints.length){
        redoPoints = [];
    }
    isPenDown = true;
    let x = e.clientX;
    let y = e.clientY-topoffSet;
    ctx.beginPath();
    ctx.moveTo(x,y);
    let point = {
        id: "md",
        x : x,
        y : y,
        strokeStyle : ctx.strokeStyle,
        lineWidth : ctx.lineWidth
    }
    line.push(point);
})

canvas.addEventListener("mousemove" , function(e){
    if(isPenDown){
        let x = e.clientX;
        let y = e.clientY-topoffSet;
        ctx.lineTo(x,y);
        ctx.stroke();
        let point ={
            id:"mm",
            x : x,
            y : y,
            strokeStyle : ctx.strokeStyle,
            lineWidth : ctx.lineWidth
        }
        line.push(point);
    }
})

canvas.addEventListener("mouseup" , function(e){
    isPenDown = false;
    console.log(line)
    pointsDb.push(line);
    console.log(pointsDb)
    console.log(pointsDb);
    line=[];
})