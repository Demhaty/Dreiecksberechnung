const cvs = document.getElementById('dreieck');
const ctx = cvs.getContext('2d');
//
//abc[a,b,c]
//abg_w[alpha,beta,gamma]
//
//
// x*100 , y*100

function draw(ctx){
    let x_a=100,y_a=450;
    let h_c = abc[0]*100 * sin(abg_w[1]);
    let x_c = abc[2]*100+100 - Math.sqrt(abc[0]*100 * abc[0]*100 - h_c * h_c);
    let y_c = 450 - h_c;
    let x_b = abc[2]*100+100;
    xx_3 = Math.sqrt(abc[1]*100 * abc[1]*100 - h_c * h_c);
    xx_4 = Math.sqrt(abc[0]*100 * abc[0]*100 - h_c * h_c)

    ctx.beginPath();
    ctx.moveTo(x_a, y_a);
    
    ctx.lineTo(x_b, y_a);
    ctx.lineTo(x_c,y_c);
    ctx.lineTo(x_a,y_a);
    ctx.stroke();
    ctx.font = "25px Arial";
    ctx.fillText("c", (abc[2]*100 /2)+100  , y_a+25);
    ctx.fillText("a", x_b-(xx_4/2)+15  , y_a -(h_c/2));
    ctx.fillText("b",  x_a+(xx_3/2)-25 , y_a -(h_c/2));
    //
    //
    //


}

draw(ctx);