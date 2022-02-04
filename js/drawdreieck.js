const cvs = document.getElementById('dreieck');
const ctx = cvs.getContext('2d');
//
//abc[a,b,c]
//abg_w[alpha,beta,gamma]
//  var obj = {'ha' : 0, 'hb' : 0 , 'hc' : 0 ,'u' : 0 ,'A' :0 , 'ru' : 0 , 'ri' :0 
//, 'sa' : 0 , 'sb' : 0 , 'sc' : 0 , 'w_alpha' : 0 , 'w_beta' : 0 , 'w_gamma' : 0};
//  var abc=[0.0,0.0,0.0],abg_w=[0.0,0.0,0.0],counter = [0,0,0,0,0,0];
// x*100 , y*100
var Obj= {x_a:0,y_a:0,x_b:0,x_c:0,y_c:0,big:0,weg:0};
//
// draw um Dreieck mit Winkel und Zeichen zu zeichnen.
//
function draw(ctx){
    //
    // A(x_a,y_a)
    // B(x_b,y_a)   C(x_c,y_c)
    // c1 Distanz zwischen (A und hc)
    // c2 Distanz zwischen (B und hc)
    // big um Seiten zu vergrößern
    // ggg um Winkel zu zeichnen.
    // arr_xy speichert x,y Positin von (alpha,beta,gamma,a,b und c)
    //
    let big =75;
    if(abc[0] < 6 && abc[1] < 6 && abc[2] < 6){big=100;}
    Obj.big=big;
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
        arr_xy.push(alpha_xy={x:50,y:-3},beta_xy={x:-10,y:-20},gamma_xy={x:-((c1-abc[2]*big)/5),y:25},a_xy={x:15},b_xy={x:-20,y:-10});
        x_c = x_a + c1;
        //winkel c 
        ctx.beginPath();   
        // 180 = alpha1 + alpha
        // ggg = 90 - (gamma1 + gamma)
        let gamma1 = 180 - (90 + (180 - abg_w[1]));
        ggg= (90 -(abg_w[2] + gamma1));
        ctx.arc(x_c,y_c , 60,Math.PI-((Math.PI/180)*ggg),0+((Math.PI/180)*(gamma1+90)),true);
        ctx.stroke();Obj.weg=2;      
    }
    //
    //  3
    else if(c2 > abc[2]*big){
        arr_xy.push(a_xy={x:15},b_xy={x:-20,y:10}); 
        x_c = x_b - c2;
        //winkel c 
        ctx.beginPath();   
        // 180 = alpha1 + alpha
        // ggg = 90 - (gamma1 + gamma)
        let gamma1 = 180 - (90 + (180 - abg_w[0]));
        ggg= (90 -(abg_w[2] + gamma1));
        ctx.arc(x_c,y_c , 60,Math.PI-((Math.PI/180)*(gamma1+90)),0+((Math.PI/180)*ggg),true);
        ctx.stroke();Obj.weg=3; 
    }
    //
    // 1
    else {
        arr_xy.push(a_xy={x:15},b_xy={x:-20,y:-5});
        x_c = x_b - c2;
        //  winkel c
        ctx.beginPath();
        // 180 = gamma + gamma1 + gamma2
        let gamma1 = Math.asin(obj.hc/abc[1]);
        let gamma2 = Math.asin(obj.hc/abc[0]);
        ctx.arc(x_c,y_c , 60,Math.PI-gamma1,0+gamma2,true);
        ctx.stroke();Obj.weg=1; 
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
    ctx.beginPath();
    //winkel b
    ggg = 180 - abg_w[1];
    ctx.arc(x_b,y_a , 60,Math.PI,0-((Math.PI/180)*ggg));
    ctx.stroke();
    //   
    //    alpha , beta und gamma Winkel_Zeichen
    //
    ctx.font = "10px Arial";
    
    ctx.fillText('α', x_a+45 , y_a-(60*sin(abg_w[0])/3)); 
    ctx.fillText('β', x_b-45  , y_a-(60*sin(abg_w[1])/3));
    if(abg_w[0]==90){ctx.fillText('γ', x_c +5 , y_c+45);}
    else if(abg_w[1]==90){ctx.fillText('γ', x_c -10 , y_c+45);}
    else if(x_c > x_b){ctx.fillText('γ', x_c -30 , 3+y_c+(60*sin(abg_w[2])/3));}
    else if(x_c < x_a){ctx.fillText('γ', x_c +30 , y_c+(60*sin(abg_w[2])/3)+5);} 
    else
    ctx.fillText('γ', x_c -5 , y_c+45);
    //
    // a , b und c Seiten_Zeichen
    // 
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
    //
    //
    //
    Obj.x_a=x_a;Obj.y_a=y_a;Obj.x_b=x_b;Obj.x_c=x_c;Obj.y_c=y_c;
    
}
//
// Seitenhalbierenden zeichnen 
//
function Seitenhalbierenden(){
    
    if(document.getElementById("Check1").checked == true){
        //
        // a
        //
        let ha = parseInt(sin(abg_w[1])*(abc[0]*Obj.big/2));
        let c2 = Math.sqrt(abc[0]*Obj.big/2*abc[0]*Obj.big/2 - (sin(abg_w[1])*(abc[0]*Obj.big/2))*(sin(abg_w[1])*(abc[0]*Obj.big/2)));
        
        ctx.beginPath();
        ctx.moveTo(Obj.x_a, Obj.y_a);
        if(Obj.weg == 2){c2 = Math.sqrt(abc[0]*Obj.big/2*abc[0]*Obj.big/2 - (sin(180-abg_w[1])*(abc[0]*Obj.big/2))*(sin(180-abg_w[1])*(abc[0]*Obj.big/2)));
            ctx.lineTo(Obj.x_a+abc[2]*Obj.big+c2, Obj.y_a-ha);
        }else
        ctx.lineTo(Obj.x_a+abc[2]*Obj.big-c2, Obj.y_a-ha);
        ctx.stroke();
        //
        // b
        //
        ha = parseInt(sin(abg_w[0])*(abc[1]*Obj.big/2));
        c2 = Math.sqrt(abc[1]*Obj.big/2*abc[1]*Obj.big/2 - (sin(abg_w[0])*(abc[1]*Obj.big/2))*(sin(abg_w[0])*(abc[1]*Obj.big/2)));
        ctx.beginPath();
        ctx.moveTo(Obj.x_b, Obj.y_a);
        if(Obj.weg == 3){c2 = Math.sqrt(abc[1]*Obj.big/2*abc[1]*Obj.big/2 - (sin(180-abg_w[0])*(abc[1]*Obj.big/2))*(sin(180-abg_w[0])*(abc[1]*Obj.big/2)));
            ctx.lineTo(Obj.x_a-c2, Obj.y_a-ha);
        }else
        ctx.lineTo(Obj.x_a+c2, Obj.y_a-ha);
        ctx.stroke();

        //
        // c
        //
        ha = parseInt(sin(abg_w[0])*(abc[1]*Obj.big));
        ctx.beginPath();
        ctx.moveTo(Obj.x_c, Obj.y_c);
        ctx.lineTo(Obj.x_a+abc[2]*Obj.big/2, Obj.y_c+ha);
        ctx.stroke();
    } else{ctx.clearRect(0,0,cvs.width,cvs.height);draw(ctx);}
}
//
// Winkelhalbierenden zeichnen 
//
function Winkelhalbierenden(){
    
    if(document.getElementById("Check2").checked == true){
        //
        // alpha
        //
        let h = obj.w_alpha*Obj.big*sin(abg_w[0]/2);
        let c = Math.sqrt(Math.abs(obj.w_alpha*Obj.big*obj.w_alpha*Obj.big - h * h));
        ctx.beginPath();
        ctx.moveTo(Obj.x_a, Obj.y_a);
        ctx.lineTo(Obj.x_a+c, Obj.y_a-h);
        ctx.stroke();
        //
        // beta
        //
        h = obj.w_beta*Obj.big*sin(abg_w[1]/2);
        c = Math.sqrt(Math.abs(obj.w_beta*Obj.big*obj.w_beta*Obj.big - h * h));
        ctx.beginPath();
        ctx.moveTo(Obj.x_b, Obj.y_a);
        ctx.lineTo(Obj.x_b-c, Obj.y_a-h);
        ctx.stroke();
        //
        // gamma
        //
        // 
        //gamma1 = 180 - 90 -beta
        //c = Math.sqrt(Math.abs(obj.w_gamma*Obj.big*obj.w_gamma*Obj.big - abc[0]*Obj.big*abc[0]*Obj.big));
        h = abc[0]*Obj.big*sin(abg_w[1]);
        c = obj.ri*Obj.big / (tan(abg_w[1]/2));
        ctx.beginPath();
        ctx.moveTo(Obj.x_c, Obj.y_c);
        if(Obj.weg == 2){c= sin(90-(abg_w[2]/2)-(180-90-(90-abg_w[0])))*obj.w_gamma*Obj.big;h = abc[1]*Obj.big*sin(abg_w[0]);
            ctx.lineTo(Obj.x_c-c,Obj.y_c+h);
        }else if(Obj.weg == 3){c= sin(90-(abg_w[2]/2)-(180-90-(90-abg_w[1])))*obj.w_gamma*Obj.big;h = abc[0]*Obj.big*sin(abg_w[1]);
            ctx.lineTo(Obj.x_c+c, Obj.y_c+h);
        }
        else{
            if(abc[0]>abc[1]){
                if(abg_w[0]==90){
                    c = obj.ri*Obj.big / (tan(abg_w[0]/2));
                    ctx.lineTo(Obj.x_a+c+Obj.big-12, Obj.y_c+h);
                }
                else
                ctx.lineTo(Obj.x_b-c+12, Obj.y_c+h);
            }
            else{
                if(abg_w[1]==90){
                    c = obj.ri*Obj.big / (tan(abg_w[1]/2));
                    ctx.lineTo(Obj.x_b-c-Obj.big+(c/4), Obj.y_c+h);
                }
                else
                ctx.lineTo(Obj.x_b-c-12, Obj.y_c+h);
            }
        }
        ctx.stroke();
    }else{ctx.clearRect(0,0,cvs.width,cvs.height);draw(ctx);}
}


//
// Inkreis zeichnen
//
function Inkreis(){
    if(document.getElementById("Check3").checked == true){
        if(abc[0] == abc[1]){
            let gamma_1 = 180 -90 -(abg_w[0]/2)
            let new_gamma = gamma_1 * 2;
            let b1 = sin(abg_w[0]/2)*abc[2]*Obj.big/sin(new_gamma);
            //let a1 = sin(abg_w[1]/2)*abc[2]*Obj.big/sin(new_gamma);
            let h = b1*sin(abg_w[0]/2);
            let c = b1 *sin(gamma_1);
            //
            //
            ctx.beginPath();
            ctx.arc(Obj.x_a+c,Obj.y_a-h,h, 0, 2 * Math.PI);
            ctx.stroke();
        }
        else {
            let c1 = obj.ri*Obj.big / (tan(abg_w[1]/2));
            ctx.beginPath();
            ctx.arc(Obj.x_b-c1,Obj.y_a-obj.ri*Obj.big , obj.ri*Obj.big, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }else{ctx.clearRect(0,0,cvs.width,cvs.height);draw(ctx);}
}