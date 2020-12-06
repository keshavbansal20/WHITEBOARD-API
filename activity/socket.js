socket.on("md", function(point){
    let myStrokeStyle = ctx.strokeStyle;
    let myWidth= ctx.lineWidth;

    ctx.strokeStyle=point.strokeStyle;
    ctx.strokeStyle=point.lineWidth;
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);

    ctx.lineWidth = myWidth;
    ctx.strokeStyle = myStrokeStyle
})

socket.on("mm", function(point){
    let myStrokeStyle = ctx.strokeStyle;
    let myWidth = ctx.lineWidth;

    ctx.lineWidth = point.lineWidth;
    ctx.strokeStyle = point.strokeStyle;
    ctx.lineTo(point.x,point.y);
    ctx.stroke();

    ctx.lineWidth = myWidth;
    ctx.strokeStyle = myStrokeStyle;

});