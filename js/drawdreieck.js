const cvs = document.getElementById('dreieck');
const ctx = cvs.getContext('2d');
//
//abc[a,b,c]
//abg_w[alpha,beta,gamma]
//  var obj = {'ha' : 0, 'hb' : 0 , 'hc' : 0 ,'u' : 0 ,'A' :0 , 'ru' : 0 , 'ri' :0 
//, 'sa' : 0 , 'sb' : 0 , 'sc' : 0 , 'w_alpha' : 0 , 'w_beta' : 0 , 'w_gamma' : 0};
//  var abc=[0.0,0.0,0.0],abg_w=[0.0,0.0,0.0],counter = [0,0,0,0,0,0];
// x*100 , y*100

function draw(ctx){
    //
    // A(x_a,y_a)
    // B(x_b,y_a)   C(x_c,y_c)
    // c1 Distanz zwischen (A und hc)
    // c2 Distanz zwischen (B und hc)
    let big =100;
    let x_a=400,y_a=600;
    let x_b = abc[2]*big + x_a;
    let x_c = 0, y_c =y_a - obj.hc*big;;
    let c1 = Math.sqrt(abc[1]*big * abc[1]*big - obj.hc*big * obj.hc*big);
    let c2 = Math.sqrt(abc[0]*big * abc[0]*big - obj.hc*big * obj.hc*big);
    ctx.font = "25px Arial";
    // 
    let ggg = 0;
    let arr_xy = [];
    //
    // 2
    if(c1 > abc[2]*big){
        //
        //
        //
        arr_xy.push(alpha_xy={x:50,y:-3},beta_xy={x:-10,y:-20},gamma_xy={x:-32,y:20},a_xy={x:15},b_xy={x:-20,y:-10});
        x_c = x_a + c1;
        //winkel c 
        ctx.beginPath();   
        // 180 = alpha1 + alpha
        // ggg = 90 - (gamma1 + gamma)
        let gamma1 = 180 - (90 + (180 - abg_w[1]));
        ggg= (90 -(abg_w[2] + gamma1));
        ctx.arc(x_c,y_c , 60,Math.PI-((Math.PI/180)*ggg),0+((Math.PI/180)*(gamma1+90)),true);
        ctx.stroke();
        //
        //
             
    }
    //
    //  3
    else if(c2 > abc[2]*big){
        //
        //
        //
        
        arr_xy.push(alpha_xy={x:2,y:-15},beta_xy={x:-53,y:-2.5},gamma_xy={x:((c2-abc[2]*big)/5),y:25},a_xy={x:15},b_xy={x:-20,y:10}); 
        x_c = x_b - c2;
        //winkel c 
        ctx.beginPath();   
        // 180 = alpha1 + alpha
        // ggg = 90 - (gamma1 + gamma)
        let gamma1 = 180 - (90 + (180 - abg_w[0]));
        ggg= (90 -(abg_w[2] + gamma1));
        ctx.arc(x_c,y_c , 60,Math.PI-((Math.PI/180)*(gamma1+90)),0+((Math.PI/180)*ggg),true);
        ctx.stroke(); 
        //
        //
        //
        
       
         
    }
    //
    // 1
    else {
        //arr_xy.push(a_xy={x:2,y:-15},b_xy={x:-53,y:-2.5},c_xy={x:32,y:20});
        arr_xy.push(alpha_xy={x:40,y:-10},beta_xy={x:-30,y:-10},gamma_xy={x:2,y:30},a_xy={x:15},b_xy={x:-20,y:-5});
        x_c = x_b - c2;
        //  winkel c
        ctx.beginPath();
        // 180 = gamma + gamma1 + gamma2
        let gamma1 = Math.asin(obj.hc/abc[1]);
        let gamma2 = Math.asin(obj.hc/abc[0]);
        ctx.arc(x_c,y_c , 60,Math.PI-gamma1,0+gamma2,true);
        ctx.stroke();

    }
    ctx.beginPath();
    ctx.moveTo(x_a, y_a);
    ctx.lineTo(x_b, y_a);
    ctx.lineTo(x_c,y_c);
    ctx.lineTo(x_a,y_a);
    ctx.stroke();
    ctx.beginPath();
    // winkel a
    ggg = (180 - abg_w[0]);
    ctx.arc(x_a,y_a , 60 ,Math.PI+((Math.PI/180)*ggg),0);
    ctx.stroke();
    //
    ctx.beginPath();
    //winkel b
    ggg = 180 - abg_w[1];
    ctx.arc(x_b,y_a , 60,Math.PI,0-((Math.PI/180)*ggg));
    ctx.stroke();
    
    //
    //   
    //    alpha , beta und gamma Winkel_Zeichen
    //// arr_xy = [alpha_xy={x:2,y:-15},beta_xy={x:-53,y:-2.5},gamma_xy={x:32,y:20}]
    ctx.font = "10px Arial";
    ctx.fillText('α', x_a+alpha_xy.x  , y_a+alpha_xy.y); 
    ctx.fillText('β', x_b+beta_xy.x  , y_a+beta_xy.y);
    ctx.fillText('γ', x_c+gamma_xy.x  , y_c+gamma_xy.y);
    //
    // a , b und c Seiten_Zeichen
    // (abc[0]*big/2)*cos(abg_w[1])
    // //// arr_xy = [a_xy={x:2,y:-15},b_xy={x:-53,y:-2.5},c_xy={x:32,y:20}]
    ctx.font = "20px Arial";
    ctx.fillText("c", (abc[2]*big /2)+x_a  , y_a+25);
    ctx.fillText("a", x_b-(abc[0]*big/2)*cos(abg_w[1]) +a_xy.x , y_a -(obj.hc*big/2));
    ctx.fillText("b",  x_a+((abc[1]*big/2)*cos(abg_w[0])) +b_xy.x , y_a -(obj.hc*big/2)+b_xy.y);
    
    //
    //  A , B und C Seiten_Zeichen
    //
    ctx.font = "25px Arial";
    ctx.fillText("C", x_c -3  , y_c - 15);
    ctx.fillText("A", x_a -20   , y_a +15);
    ctx.fillText("B",  x_b + 10 , y_a +15);
    
    
    
    arr_xy = [];
   

}

