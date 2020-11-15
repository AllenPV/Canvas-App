var mouseEvent="empty";
var last_position_of_X,last_position_of_Y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=2;
canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
   width_of_the_line=document.getElementById("width_of_line").value;
   mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_X=e.clientX-canvas.offSetLeft;
    current_position_of_mouse_Y=e.clientY-canvas.offSetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last position of X and Y coordinates= ");
        console.log("X=  "+last_position_of_X+"Y=  "+last_position_of_Y);
        ctx.moveTo(last_position_of_X,last_position_of_Y);
        console.log("current position of X and Y coordinates= ");
        console.log("X=  "+current_position_of_mouse_X+"Y=  "+current_position_of_mouse_Y);
        ctx.lineTo(current_position_of_mouse_X,current_position_of_mouse_Y);
        ctx.stroke();
    }
    last_position_of_X=current_position_of_mouse_X;
    last_position_of_Y=current_position_of_mouse_Y;
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseUp);
function my_mouseUp(e){
    mouseEvent="mouseUp";
}
function clearArea(){
    ctx.cleaRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

