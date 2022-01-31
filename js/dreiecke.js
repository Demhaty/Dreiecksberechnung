

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
    //  a , b und gamma vorhanden
    //
    else if(weg == 2){
        this.a = a;
        this.b = b;
        this.gamma = c;
        //
        // c , alpha und beta berechnen
        //
        
        this.c = Math.sqrt((a*a + b*b -2*a*b*cos(this.gamma)));
        c=this.c;
        this.alpha = acos((a * a - b * b - c * c) / (-2 * b * c));
        this.beta = acos((b * b - c * c - a * a) / (-2 * c * a));


        
    }
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
function cos(x){
    return Math.cos( x * Math.PI / 180);
}

//let a=0,b=0,c=0,alpha=0.0,beta=0.0,gamma=0.0;
let a = document.getElementById('a').value;
let b = document.getElementById('b').value;
let c = document.getElementById('c').value;

if(a != 0 && b!=0 && c!=0){
    let weg = 1;
    var new_dreick = new Dreieck(a,b,c,weg);
    console.log(new_dreick);
}
//
//  
//
/*
else if((alpha + beta + gamma) == 180){
    let weg = 2;
    var new_dreick = new Dreieck(45,45,90,weg);
    console.log(new_dreick);
}
*/
//
// zwei Seiten und der eingeschlossene Winkel
//new Dreieck(a,b,gamma,weg=2)
if((a !=0 && b !=0 && gamma !=0)){
let weg = 2;
var new_dreick = new Dreieck(4,5,80,weg);
console.log(new_dreick);
}

























