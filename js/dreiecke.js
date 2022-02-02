
var obj = {'ha' : 0, 'hb' : 0 , 'hc' : 0 ,'u' : 0 ,'A' :0 , 'ru' : 0 , 'ri' :0 
, 'sa' : 0 , 'sb' : 0 , 'sc' : 0 , 'w_alpha' : 0 , 'w_beta' : 0 , 'w_gamma' : 0};

var abc=[0.0,0.0,0.0],abg_w=[0.0,0.0,0.0],counter = [0,0,0,0,0,0];



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

//
// wsS , sww , winkel , sws
//


   

/*

wsS(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]);
sww(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]);
if(!winkel(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]))
console.log("fehler");
if(!sws(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]))
console.log("fehler");
berechnungen (abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]);
console.log("ok");
*/



//
//var arr3 = [abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]];
// 
// display ,Eingaben und counter 
function display(){
    let arr1 = ['a','b','c','alpha','beta','gamma'];
    let arr2 = ['aa','bb','cc','alphaa','betab','gammac'];
    let arr3 = [abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]];
    for(let i = 0; i< arr1.length ;i++){
        
            let x = document.getElementById(arr1[i]);
            x.addEventListener( "input" , () => {
                if((counter[0]+counter[1]+counter[2]+counter[3]+counter[4]+counter[5]) <= 3 ){
                    if((counter[0]+counter[1]+counter[2]+counter[3]+counter[4]+counter[5]) == 3){
                        if(!counter[i]){
                           alert("you musst input only 3 ");
                           document.getElementById(arr1[i]).value = "";
                        }
                        else{
                            if(document.getElementById(arr1[i]).value == ""){
                                document.getElementById(arr2[i]).value="";
                                counter[i]=0;
                                arr3[i]=0;
                            }
                            else{
                               document.getElementById(arr2[i]).value=document.getElementById(arr1[i]).value;
                               arr3[i] = document.getElementById(arr1[i]).value;    
                            }
                        }
                        }
                    else{
                    document.getElementById(arr2[i]).value=document.getElementById(arr1[i]).value;
                    arr3[i] = document.getElementById(arr1[i]).value;
                    counter[i]=1;}}
    });
    }  
}



function sws(a,b,c,alpha,beta,gamma){
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

//
// Berechnungen ha ,hb ,hc ,u ,A ,ri ,ru 
// ,sa ,sb ,sc ,w_alpha ,w_beta und w_gamma
//
//  var obj = {'ha' : 0, 'hb' : 0 , 'hc' : 0 ,'u' : 0 ,'A' :0 , 'ru' : 0 , 'ri' :0 
//, 'sa' : 0 , 'sb' : 0 , 'sc' : 0 , 'w_alpha' : 0 , 'w_beta' : 0 , 'w_gamma' : 0};
//
function berechnungen (a,b,c,alpha,beta,gamma){
    
    // ha ,hb und hc berechnen
    obj.ha = b * sin(gamma);
    obj.hb = c * sin(alpha);
    obj.hc = a * sin(beta);
     
    //u 
    obj.u = a + b + c;
    //A
    obj.A = obj.ha * a / 2 ;
    // ru
    obj.ru= a /(2 * sin(alpha));
    // ri
    obj.ri = c * sin(alpha / 2) * sin(beta / 2) / sin((alpha + beta) / 2);
    // sa ,sb und sc
    obj.sa = Math.sqrt(2 * (b * b + c * c ) - a * a ) / 2;
    obj.sb = Math.sqrt(2 * ( c * c + a * a ) - b * b) / 2;
    obj.sc = Math.sqrt(2 * (a * a + b * b ) - c * c) / 2;
    //  w_alpha , w_beta und w_gamma
    //
    obj.w_alpha = 2 * b * c * cos(alpha / 2) / (b + c);
    obj.w_beta = 2 * c * a * cos(beta / 2) / (c + a);
    obj.w_gamma = 2 * a * b * cos(gamma/2) / (a + b);

}




display();



if(abc[0]){document.getElementById('aa').value=abc[0];}
if(abc[1]){document.getElementById('bb').value=abc[1];}
if(abc[2]){document.getElementById('cc').value=abc[2];}

if(abg_w[0]){document.getElementById('alphaa').value=abg_w[0];}
if(abg_w[1]){document.getElementById('betab').value=abg_w[1];}
if(abg_w[2]){document.getElementById('gammac').value=abg_w[2];}























