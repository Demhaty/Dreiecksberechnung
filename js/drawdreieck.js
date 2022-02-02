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
    //let rad = (Math.PI / 180) * degrees
    ctx.beginPath();
    //
    let ggg = (180 - abg_w[0]);
    ctx.arc(x_a,y_a , 60 ,Math.PI+((Math.PI/180)*ggg),0);
    
    ctx.stroke();
    // 
    ctx.beginPath();
    ggg = 180 - abg_w[1];
    ctx.arc(x_b,y_a , 60,Math.PI,0-((Math.PI/180)*ggg));
    ctx.stroke();
    //
    ctx.beginPath();
     ggg= (180 -abg_w[2])/2;

    ctx.arc(x_c,y_c , 60,Math.PI-((Math.PI/180)*ggg),0+((Math.PI/180)*ggg),true);
    ctx.stroke();
    //
    //  alpha , beta und gamma zeichen auf dreieck
    //
    ctx.font = "15px Arial";
    ctx.fillText('α', x_a+40  , y_a-12); 
    ctx.fillText('β', x_b-40  , y_a-12);
    ctx.fillText('γ', x_c  , y_c+30);

}

