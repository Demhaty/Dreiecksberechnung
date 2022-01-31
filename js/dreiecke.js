

var Dreieck = function(a,b,c,weg){
    //
    //  a , b und c vorhanden
    //
    if(weg == 1){
    this.a = a;
    this.b = b;
    this.c = c;
    //
    // alpha ,beta und gamma berechnen
    //
    this.alpha = acos((a * a - b * b - c * c) / (-2 * b * c));
    this.beta = acos((b * b - c * c - a * a) / (-2 * c * a));
    this.gamma = acos((c * c - a * a - b * b) / (-2 * a * b));
    }
    //
    //  alpha , beta und gamma vorhanden
    //
    else if(weg == 2){
        //
        // alpha ,beta und gamma berechnen
        //
        this.alpha = a;
        this.beta = b;
        this.gamma = c;
        //
        //  a , b und c vorhanden
        //
        a =  b * sin(alpha) / sin(beta);
        b =
        c = 
    }
    // ha ,hb und hc berechnen
    this.ha = b * sin(this.gamma);
    this.hb = c * sin(this.alpha);
    this.hc = a * sin(this.beta);
     
    //u 
    this.u = a + b + c;
    //A
    this.A = this.ha * a / 2 ;
    // ru
    this.ru= a /(2 * sin(this.alpha));
    // ri
    this.ri = c * sin(this.alpha / 2) * sin(this.beta / 2) / sin((this.alpha + this.beta) / 2);
    // sa

    
    
}
//
//
//
function acos(x)
{
    return (Math.acos(x))/Math.PI*180;
}
function atn(x)
{
    return Math.atan(x) / Math.PI * 180;
}
function sin(x){
    return Math.sin(x * Math.PI / 180);
}

let a = document.getElementById('a').value;
let b = document.getElementById('b').value;
let c = document.getElementById('c').value;

if(a != 0 && b!=0 && c!=0){
    let weg = 1;
    var new_dreick = new Dreieck(a,b,c,weg);
    console.log(new_dreick);
}
else if((a + b + c) == 180){
    let weg = 2;
    var new_dreick = new Dreieck(45,45,90,weg);
    console.log(new_dreick);
}