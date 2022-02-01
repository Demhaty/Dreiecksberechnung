
/*
var Dreieck = function(a,b,c,alpha,beta,gamma){
    
    this.a = a;
    this.b = b;
    this.c = c;
    this.alpha = alpha;
    this.beta = beta;
    this.gamma = gamma;

   
    // ha ,hb und hc berechnen
    this.ha = this.b * sin(this.gamma);
    this.hb = this.c * sin(this.alpha);
    this.hc = this.a * sin(this.beta);
     
    //u 
    this.u = this.a + this.b + this.c;
    //A
    this.A = this.ha * this.a / 2 ;
    // ru
    this.ru= this.a /(2 * sin(this.alpha));
    // ri
    this.ri = this.c * sin(this.alpha / 2) * sin(this.beta / 2) / sin((this.alpha + this.beta) / 2);
    // sa
 
    
}
*/
//
//
//
function acos(x)
{
    return (Math.acos(x))/Math.PI*180;
}
function asin(x)
{
    return (Math.asin(x))/Math.PI*180;
}
function atn(x)
{
    return Math.atan(x) / Math.PI * 180;
}
function sin(x){
    return Math.sin(x * Math.PI / 180);
}
function cos(x){
    return Math.cos( x * Math.PI / 180);
}


/*

//
// zwei Seiten und der eingeschlossene Winkel
// ssw
/*
let weg = 2;
abc[0]=4;
abc[2]=4;
abg_w[0]=60;
if(!ssw(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]))
console.log("fehler");

//
//sss
//
abc[0]=4;
abc[2]=4;
abc[1]=4;
if(!winkel(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]))
console.log("fehler");

//
// ssw
//
abc[0]=4;
abg_w[2]=30;
abg_w[1]=30;
sww(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]);
console.log("ok");
*/
//
//  wsS
//
/*
abc[0]=4;
abc[1]=4;
abg_w[0]=30;
wsS(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]);
console.log("ok");
*/
//
// wsS , sww , winkel , ssw
//
var abc=[0.0,0.0,0.0],abg_w=[0.0,0.0,0.0];
abc[0] = document.getElementById('a').value;if(abc[0]){document.getElementById('aa').value=abc[0];}
abc[1] = document.getElementById('b').value;if(abc[1]){document.getElementById('bb').value=abc[1];}
abc[2] = document.getElementById('c').value;if(abc[2]){document.getElementById('cc').value=abc[2];}

abg_w[0] = document.getElementById('alpha').value;if(abg_w[0]){document.getElementById('alphaa').value=abg_w[0];}
abg_w[1] = document.getElementById('beta').value;if(abg_w[1]){document.getElementById('betab').value=abg_w[1];}
abg_w[2] = document.getElementById('gamma').value;if(abg_w[2]){document.getElementById('gammac').value=abg_w[2];}


wsS(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]);
sww(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]);
if(!winkel(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]))
console.log("fehler");
if(!ssw(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]))
console.log("fehler");
console.log("ok");



function ssw(a,b,c,alpha,beta,gamma){
    //
    // a, b und gamma vorhanden
    // c, alpha und beta berechnen
    if(a != 0 &&  b != 0 && gamma !=0){
        abc[2] = Math.sqrt((a*a + b*b -2*a*b*cos(gamma)));
        alpha = acos((a * a - b * b - c * c) / (-2 * b * c));
        beta = acos((b * b - c * c - a * a) / (-2 * c * a));
        return 1;
    }
    //
    // a, c und beta vorhanden
    // b, alpha und gamma berechnen
    else if(a != 0 && c !=0 && beta !=0){
        abc[1] = Math.sqrt((a * a + c * c - 2 * a * c * cos(beta)));
        b = abc[1];
        abg_w[0] = acos((a * a - b * b - c * c) / (-2 * b * c));
        abg_w[2] = acos((c * c - b * b - a * a) / (-2 * b * a));
        return 1;
    }
    //
    // c, b und alpha vorhanden
    // a, gamma und beta berechnen
    else if (b != 0 && c !=0 && alpha !=0){
        abc[0] = Math.sqrt((b*b + c*c -2*c*b*cos(alpha)));
        abg_w[1] = acos((b * b - c * c - a * a) / (-2 * c * a));
        abg_w[2] = acos((c * c - a * a - b * b) / (-2 * a * b));
        return 1;
    }
    else{return 0;}
}
//
// winkel berechnen
// sss vorhanden
//
function winkel(a,b,c,alpha,beta,gamma){
    //
    // alpha ,beta und gamma berechnen
    //
    if(a != 0 && b != 0 && c != 0){
        abg_w[0] = acos((a * a - b * b - c * c) / (-2 * b * c));
        abg_w[1] = acos((b * b - c * c - a * a) / (-2 * c * a));
        abg_w[2] = acos((c * c - a * a - b * b) / (-2 * a * b));
        return 1;
    }
    else{return 0;}
}
//
//  eine Seite und zwei Winkel
//  sww
//
function sww(a,b,c,alpha,beta,gamma){
    //
    // berechnet rest Winkel
    //
    if(alpha == 0 && beta !=0 && gamma != 0){
        if((180 - beta - gamma) <= 0.0){return 0;}
        else{abg_w[0] = 180 - beta - gamma;}
    }
    else if(alpha != 0 && beta ==0 && gamma != 0){
        if((180 - alpha - gamma) <= 0.0){return 0;}
        else{abg_w[1] = 180 - alpha - gamma;}
    }
    else if(alpha != 0 && beta !=0 && gamma == 0){
        if((180 - beta - alpha) <= 0.0){return 0;}
        else{abg_w[2] = 180 - beta - alpha;}
    }
    //
    // berechnet reste Seiten
    //
    if(a != 0 && b == 0 && c == 0){
        abc[1] = (a * sin(abg_w[1])) / sin(abg_w[0]);
        abc[2] = (a * sin(abg_w[2])) / sin(abg_w[0]);
        return 1;
    }
    else if(b != 0 && a == 0 && c == 0){
        abc[0] = (b * sin(abg_w[0])) / sin(abg_w[1]);
        abc[2] = (b * sin(abg_w[2])) / sin(abg_w[1]);
        return 1;
    }
    else if(c != 0 && a == 0 && b == 0){
        abc[0] = (c * sin(abg_w[0])) / sin(abg_w[2]);
        abc[1] = (c * sin(abg_w[1])) / sin(abg_w[2]);
        return 1;
    }
}

//
// zwei Seiten und der der größeren Seite gegenüberliegende Winkel (SsW oder WsS)
//
function wsS(a,b,c,alpha,beta,gamma){
    if(alpha != 0 && a != 0){
        if(b != 0){
            abg_w[1] = asin( b * sin(alpha) / a);
            abg_w[2] = 180 - alpha -abg_w[1];
            abc[2] = sin(abg_w[2]) * b / sin(abg_w[1]);
            
        }
        else if(c != 0){
            abg_w[2] = asin( c * sin(alpha) / a);
            abg_w[1] = 180 - alpha -abg_w[2];
            abc[1] = sin(abg_w[1]) * c / sin(abg_w[2]);
            
        }
    }
    //
    else if(beta != 0 && b != 0){
        if(a != 0){
            abg_w[0] = asin( a * sin(beta) / b);
            abg_w[2] = 180 - beta -abg_w[0];
            abc[2] = sin(abg_w[2]) * b / sin(beta);
        }
        else if(c != 0){
            abg_w[2] = asin( c * sin(beta) / b);
            abg_w[0] = 180 - beta -abg_w[2];
            abc[0] = sin(abg_w[0]) * b / sin(beta);
        }
    }
    //
    else if(gamma != 0 && c != 0){
        if(a != 0){
            abg_w[0] = asin( a * sin(gamma) / c);
            abg_w[1] = 180 - gamma -abg_w[0];
            abc[1] = sin(abg_w[1]) * c / sin(gamma);
        }
        else if(b != 0){
            abg_w[1] = asin( b * sin(gamma) / c);
            abg_w[0] = 180 - gamma -abg_w[1];
            abc[0] = sin(abg_w[0]) * c / sin(gamma);
        }
    }
}


if(abc[0]){document.getElementById('aa').value=abc[0];}
if(abc[1]){document.getElementById('bb').value=abc[1];}
if(abc[2]){document.getElementById('cc').value=abc[2];}

if(abg_w[0]){document.getElementById('alphaa').value=abg_w[0];}
if(abg_w[1]){document.getElementById('betab').value=abg_w[1];}
if(abg_w[2]){document.getElementById('gammac').value=abg_w[2];}























