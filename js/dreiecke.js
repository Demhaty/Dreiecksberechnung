
var obj = {'ha' : 0, 'hb' : 0 , 'hc' : 0 ,'u' : 0 ,'A' :0 , 'ru' : 0 , 'ri' :0 
, 'sa' : 0 , 'sb' : 0 , 'sc' : 0 , 'w_alpha' : 0 , 'w_beta' : 0 , 'w_gamma' : 0};
// abc=[0.0,0.0,0.0] => abc=[a,b,c]
// abg_w=[0.0,0.0,0.0]  => abg_w=[alpha,beta,gamma]
// counter = [0,0,0,0,0,0] => counter = [Seite,Seite,Seite,Winkel,Winkel,Winkel] um Eingaben kennen. jeder Index entweder 1 oder 0.  
//      Wenn 1 ist ,hat Benutzer etwas eingegeben und 0 nichts eingegeben.
var abc=[0.0,0.0,0.0],abg_w=[0.0,0.0,0.0],counter = [0,0,0,0,0,0];
var arr3 = [abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]];

// Reguläre Ausdrücke
const regex = /^[1-9]*$|^[0\.]*\d*$|^[1-9]*\.\d*$/;

//const regex2 = /^[1-9]*$|^[0\.]*\d*$|^[1-9]*\.\d*$/;
//
// 
// Winkel in Grad
function acos(x)
{
    return (Math.acos(x))/Math.PI*180;
}
// Winkel in Grad
function asin(x)
{
    return (Math.asin(x))/Math.PI*180;
}
// Winkel in Grad
function atn(x)
{
    return Math.atan(x) / Math.PI * 180;
}
// sin(x)  deg => Rad // von Grad nach Radiant 
function sin(x){
    return Math.sin(x * Math.PI / 180);
}
// // cos(x)  deg => Rad // von Grad nach Radiant 
function cos(x){
    return Math.cos( x * Math.PI / 180);
}



//

// 
// display eingegebene Werte, Eingaben und Counter
function display(){
    let arr1 = ['a','b','c','alpha','beta','gamma'];
    let arr2 = ['aa','bb','cc','alphaa','betab','gammac'];
    let m =true;
    //let arr3 = [abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]];
    for(let i = 0; i< arr1.length ;i++){
            display_empty();
           
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
                                display_empty();
                            }
                            else{
                                //
                                //
                                //
                                let result = regex.test(document.getElementById(arr1[i]).value); 
                                document.getElementById(arr2[i]).value=document.getElementById(arr1[i]).value;
                                if(result){
                                    arr3[i] = document.getElementById(arr1[i]).value;
                                    ctx.clearRect(0,0,cvs.width,cvs.height);all();
                                }else{alert("Bitte geben eine Zahl");}
                                   
                            }
                        }
                        }
                    else{
                        if(document.getElementById(arr1[i]).value != ""){
                            let result = regex.test(document.getElementById(arr1[i]).value);
                            document.getElementById(arr2[i]).value=document.getElementById(arr1[i]).value;
                            if(result){
                                arr3[i] = document.getElementById(arr1[i]).value;
                                counter[i]=1;ctx.clearRect(0,0,cvs.width,cvs.height);all();
                            }else{alert("Bitte geben eine Zahl");}
                        }else {
                            document.getElementById(arr2[i]).value="";
                            counter[i]=0;
                            arr3[i]=0;
                        }
                    }}
    });
    }  
}

//
// zwei Seiten und der eingeschlossene Winkel
//
function sws(a,b,c,alpha,beta,gamma){
    //
    // a, b und gamma vorhanden
    // c, alpha und beta berechnen
    if(a != 0 &&  b != 0 && gamma !=0){
        abc[2] = Math.sqrt((a*a + b*b -2*a*b*cos(gamma)));
        c = abc[2];
        abg_w[0] = acos((a * a - b * b - c * c) / (-2 * b * c));
        abg_w[1] = acos((b * b - c * c - a * a) / (-2 * c * a));
        berechnung_weg[2].y="c = sqrt(a^2 + b^2- 2 * a * b * cos(γ))";
        berechnung_weg[3].y="alpha = acos((a^2 - b^2 - c^2) / (-2 * b * c))";
        berechnung_weg[4].y="beta = acos((b^2 - c^2 - a^2) / (-2 * c * a))  oder  beta = 180 - alpha - gamma";
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
        berechnung_weg[1].y="b = sqrt(a^2 + c^2 - 2 * a * c * cos(β))";
        berechnung_weg[3].y="alpha = acos((a^2 - b^2 - c^2) / (-2 * b * c))";
        berechnung_weg[5].y="gamma = acos((c^2 - b^2 - a^2) / (-2 * b * a))  oder  gamma = 180 - alpha - beta";
        return 1;
    }
    //
    // c, b und alpha vorhanden
    // a, gamma und beta berechnen
    else if (b != 0 && c !=0 && alpha !=0){
        abc[0] = Math.sqrt((b*b + c*c -2*c*b*cos(alpha)));
        a = abc[0];
        abg_w[1] = acos((b * b - c * c - a * a) / (-2 * c * a));
        abg_w[2] = acos((c * c - a * a - b * b) / (-2 * a * b));
        berechnung_weg[0].y="a = sqrt(b^2 + c^2 -2*c*b*cos(α))";
        berechnung_weg[4].y="beta = acos((b^2 - c^2 - a^2) / (-2 * c * a))";
        berechnung_weg[5].y="gamma = acos((c^2 - a^2 - b^2) / (-2 * a * b))  oder  gamma = 180 - alpha - beta";
        return 1;
    }
    else{return 0;}
}
//
// winkel berechnen
// sss vorhanden
//
function winkel(a,b,c){
    //
    // alpha ,beta und gamma berechnen
    // 
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    if(a > b+c || a == b+c)return ("a >= b+c");
    else if(b > a+c || b == a+c)return ("b >= a+c");
    else if(c > a+b || c == a+b)return ("c >= a+b");
    else{
    abg_w[0] = acos((a * a - b * b - c * c) / (-2 * b * c));
    abg_w[1] = acos((b * b - c * c - a * a) / (-2 * c * a));
    abg_w[2] = acos((c * c - a * a - b * b) / (-2 * a * b));
    berechnung_weg[3].y="alpha = acos((a^2 - b^2 - c^2) / (-2 * b * c))";
    berechnung_weg[4].y="beta = acos((b^2 - c^2 - a^2) / (-2 * c * a))";
    berechnung_weg[5].y="gamma = acos((c^2 - a^2 - b^2) / (-2 * a * b)) oder gamma = 180 - beta - alpha";
    
    return 1;
    }

}
//
//  eine Seite und zwei Winkel
//  sww
//
function sww(a,b,c,alpha,beta,gamma){
    //
    // berechnet Reste Winkel
    // 
    if(alpha == 0 && beta !=0 && gamma != 0){
        if((180 - beta - gamma) <= 0.0){return 0;}
        else{abg_w[0] = 180 - beta - gamma;
        berechnung_weg[3].y="alpha = 180 - beta - gamma";
        }
    }
    else if(alpha != 0 && beta ==0 && gamma != 0){
        if((180 - alpha - gamma) <= 0.0){return 0;}
        else{abg_w[1] = 180 - alpha - gamma;
        berechnung_weg[4].y="beta = 180 - alpha - gamma";
        }
    }
    else if(alpha != 0 && beta !=0 && gamma == 0){
        if((180 - beta - alpha) <= 0.0){return 0;}
        else{abg_w[2] = 180 - beta - alpha;
        berechnung_weg[5].y="gamma = 180 - beta - alpha";
        }
    }
    //
    // berechnet Reste Seiten
    //
    if(a != 0 && b == 0 && c == 0){
        abc[1] = (a * sin(abg_w[1])) / sin(abg_w[0]);
        abc[2] = (a * sin(abg_w[2])) / sin(abg_w[0]);
        berechnung_weg[1].y="b = (a * sin(beta)) / sin(alpha)";
        berechnung_weg[2].y="c = (a * sin(gamma)) / sin(alpha)";
        return 1;
    }
    else if(b != 0 && a == 0 && c == 0){
        abc[0] = (b * sin(abg_w[0])) / sin(abg_w[1]);
        abc[2] = (b * sin(abg_w[2])) / sin(abg_w[1]);
        berechnung_weg[0].y="a = (b * sin(alpha)) / sin(beta)";
        berechnung_weg[2].y="c = (b * sin(gamma)) / sin(beta)";
        return 1;
    }
    else if(c != 0 && a == 0 && b == 0){
        abc[0] = (c * sin(abg_w[0])) / sin(abg_w[2]);
        abc[1] = (c * sin(abg_w[1])) / sin(abg_w[2]);
        berechnung_weg[0].y="a = (c * sin(alpha)) / sin(gamma)";
        berechnung_weg[1].y="b = (c * sin(beta)) / sin(gamma)";
        return 1;
    }
    return 0;
}

//
// zwei Seiten und der der größeren Seite gegenüberliegende Winkel (SsW oder WsS)
//
function wsS(a,b,c,alpha,beta,gamma){
    if(alpha != 0 && a != 0 && b != 0 && a > b){
        abg_w[1] = asin( b * sin(alpha) / a);
        abg_w[2] = 180 - alpha -abg_w[1];
        abc[2] = sin(abg_w[2]) * b / sin(abg_w[1]);
        berechnung_weg[4].y="beta = asin( b * sin(alpha) / a)";
        berechnung_weg[5].y="gamma = 180 - alpha - beta";
        berechnung_weg[2].y="c = sin(gamma) * b / sin(beta)";
        return 1;
    }
    else if(beta != 0 && a != 0 && b != 0 && a < b){
        abg_w[0] = asin( a * sin(beta) / b);
        abg_w[2] = 180 - beta -abg_w[0];
        abc[2] = sin(abg_w[2]) * b / sin(beta);
        berechnung_weg[3].y="alpha = asin( a * sin(beta) / b)";
        berechnung_weg[5].y="gamma = 180 - beta - alpha";
        berechnung_weg[2].y="c = sin(gamma) * b / sin(beta)";
        return 1;
    }
    else if(alpha != 0 && a != 0 && c != 0 && a > c){
        abg_w[2] = asin(c * sin(alpha) / a);
        abg_w[1] = 180 - alpha - abg_w[2];
        abc[1] = sin(abg_w[1]) * a / sin(alpha);
        berechnung_weg[5].y="gamma = asin(c * sin(alpha) / a)";
        berechnung_weg[4].y="beta = 180 - alpha - gamma";
        berechnung_weg[1].y="b = sin(beta) * a / sin(alpha)";
        return 1;
    }
    else if(gamma != 0 && a != 0 && c != 0 && a < c){
        abg_w[0] = asin(a * sin(gamma) / c);
        abg_w[1] = 180 - gamma - abg_w[0];
        abc[1] = sin(abg_w[1]) * c / sin(gamma);
        berechnung_weg[3].y=" alpha= asin(a * sin(gamma) / c)";
        berechnung_weg[4].y="beta = 180 - gamma - alpha";
        berechnung_weg[1].y="b = sin(beta) * c / sin(gamma)";
        return 1;
    }
    else if(gamma != 0 && b != 0 && c != 0 && b < c){
        abg_w[1] = asin(b * sin(gamma) / c);
        abg_w[0] = 180 - gamma - abg_w[1];
        abc[0] = sin(abg_w[0]) * c / sin(gamma);
        berechnung_weg[4].y="beta= asin(b * sin(gamma) / c)";
        berechnung_weg[3].y="alpha = 180 - gamma - beta";
        berechnung_weg[0].y="a = sin(alpha) * c / sin(gamma)";
        return 1; 
    }
    else if(beta != 0 && b != 0 && c != 0 && b > c){
        abg_w[2] = asin(c * sin(beta) / b);
        abg_w[0] = 180 - beta - abg_w[2];
        abc[0] = sin(abg_w[0]) * b / sin(beta);
        berechnung_weg[5].y="gamma = asin(c * sin(beta) / b)";
        berechnung_weg[3].y="alpha = 180 - beta - gamma";
        berechnung_weg[0].y="a = sin(alpha) * b / sin(beta)";
        return 1; 
    }
    return false;
}
//
//
// Berechnungen ha ,hb ,hc ,u ,A ,ri ,ru 
// ,sa ,sb ,sc ,w_alpha ,w_beta und w_gamma
//
//
function berechnungen (a,b,c,alpha,beta,gamma){
    
    // ha ,hb und hc berechnen
    obj.ha = b * sin(gamma);berechnung_weg[6].y="ha = b * sin(gamma)";
    obj.hb = c * sin(alpha);berechnung_weg[7].y="hb = c * sin(alpha)";
    obj.hc = a * sin(beta);berechnung_weg[8].y="hc = a * sin(beta)";
     
    //u 
    obj.u = parseFloat(a) + parseFloat(b) + parseFloat(c);berechnung_weg[9].y="u = a + b + c";
    //A
    obj.A = obj.ha * a / 2 ;berechnung_weg[10].y="A = ha * a";
    // ru
    obj.ru= a /(2 * sin(alpha));berechnung_weg[11].y="ru= a /(2 * sin(alpha))";
    // ri
    obj.ri = c * sin(alpha / 2) * sin(beta / 2) / sin((alpha + beta) / 2);berechnung_weg[12].y="ri = c * sin(alpha / 2) * sin(beta / 2) / sin((alpha + beta) / 2)";
    // sa ,sb und sc
    obj.sa = Math.sqrt(2 * (b * b + c * c ) - a * a ) / 2;berechnung_weg[13].y="sa = sqrt(2 * (b^2 + c^2 ) - a^2 ) / 2";
    obj.sb = Math.sqrt(2 * ( c * c + a * a ) - b * b) / 2;berechnung_weg[14].y="sb = sqrt(2 * ( c^2 + a^2 ) - b^2) / 2";
    obj.sc = Math.sqrt(2 * (a * a + b * b ) - c * c) / 2;berechnung_weg[15].y="sc = sqrt(2 * (a^2 + b^2 ) - c^2) / 2";
    //  w_alpha , w_beta und w_gamma
    //
    obj.w_alpha = 2 * b * c * cos(alpha / 2) / (b + c);berechnung_weg[16].y="w_alpha = 2 * b * c * cos(alpha / 2) / (b + c)";
    obj.w_beta = 2 * c * a * cos(beta / 2) / (c + a);berechnung_weg[17].y="w_beta = 2 * c * a * cos(beta / 2) / (c + a)";
    obj.w_gamma = 2 * a * b * cos(gamma/2) / (a + b);berechnung_weg[18].y="w_gamma = 2 * a * b * cos(gamma/2) / (a + b)";

}


function all(){
    
    
    for(let i=0; i<arr3.length;i++){
        if(i < 3){
            abc[i]= parseFloat(arr3[i]);
        }else{ abg_w[i-3]=parseFloat(arr3[i]);}
    }
    
    //
    //  SSS
    //
    if((counter[0]+counter[1]+counter[2]) == 3){
        berechnung_weg[19].x = (winkel(abc[0],abc[1],abc[2]));
        if(winkel(abc[0],abc[1],abc[2]) == 1){
            //winkel(abc[0],abc[1],abc[2]);
            berechnungen (abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]);
            berechnung_weg[19].y="drei Seiten (SSS)";
            console.log("ok");
            display_new();
            draw(ctx);
            document.getElementById('Darstellung_B').innerHTML = berechnung_weg[19].y;
        }
        else{
        document.getElementById('Darstellung_B').innerHTML = berechnung_weg[19].x;
        }   
    }
    //
    //  SWS
    //
    else if(((counter[0]+counter[1]+counter[5]) == 3)  || ((counter[0]+counter[2]+counter[4]) == 3) 
                        ||  ((counter[2]+counter[1]+counter[3]) == 3) ){
                            berechnung_weg[19].x = sws(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]);
                            //sws(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]);
                            if(berechnung_weg[19].x){
                            berechnung_weg[19].y= "zwei Seiten und der eingeschlossene Winkel (SWS)";
                            //console.log(x);
                            berechnungen (abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]);
                            display_new();
                            draw(ctx);
                            document.getElementById('Darstellung_B').innerHTML = berechnung_weg[19].y;
                            }
                            else{document.getElementById('Darstellung_B').innerHTML = "Fehler";}

    }
    //
    //  (SWW, WSW oder WWS)
    // 160 Z
    else if(((counter[0]+counter[4]+counter[5]) == 3) || ((counter[0]+counter[3]+counter[5]) == 3)
    || ((counter[0]+counter[3]+counter[4]) == 3) || ((counter[1]+counter[3]+counter[5]) == 3)
    || ((counter[1]+counter[3]+counter[4]) == 3) || ((counter[1]+counter[4]+counter[5]) == 3)
    || ((counter[2]+counter[4]+counter[5]) == 3) || ((counter[2]+counter[3]+counter[5]) == 3) || ((counter[2]+counter[3]+counter[4]) == 3)){
                            berechnung_weg[19].x = sww(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]);
                            if(berechnung_weg[19].x){
                            //sww(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]);
                            berechnung_weg[19].y="eine Seite und zwei Winkel (SWW, WSW oder WWS)";
                            //console.log(x);
                            berechnungen (abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]);
                            display_new();
                            draw(ctx);
                            document.getElementById('Darstellung_B').innerHTML = berechnung_weg[19].y;
                        }
                        else{document.getElementById('Darstellung_B').innerHTML = "Fehler";}

    }
    //
    // Ssw oder wsS
    // 199 Z
    else if( ((counter[0]+counter[1]+counter[3]) == 3) || ((counter[0]+counter[1]+counter[4]) == 3) ||
    ((counter[0]+counter[2]+counter[5]) == 3) || ((counter[0]+counter[2]+counter[3]) == 3) ||
    ((counter[2]+counter[1]+counter[5]) == 3) || ((counter[2]+counter[1]+counter[4]) == 3) ){
                            berechnung_weg[19].x = wsS(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]);
                            //wsS(abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]);
                            if(berechnung_weg[19].x){
                            berechnung_weg[19].y="zwei Seiten und der der größeren Seite gegenüberliegende Winkel (SsW oder WsS)";
                            //console.log(x);
                            berechnungen (abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2]);
                            display_new();
                            draw(ctx);
                            document.getElementById('Darstellung_B').innerHTML = berechnung_weg[19].y;
                            }
                            else{document.getElementById('Darstellung_B').innerHTML = "Fehler";} 

    }else{
        if((counter[0]+counter[1]+counter[2]+counter[3]+counter[4]+counter[5]) == 3){
        document.getElementById('Darstellung_B').innerHTML = "Das Dreieck kann aufgrund dieser Angaben nicht eindeutig oder gar nicht berechnet werden.";}
        //console.log("Das Dreieck kann aufgrund dieser Angaben nicht eindeutig oder gar nicht berechnet werden.")
    }
    
    B_weg();
}
display();


function display_empty(){
    if((counter[0]+counter[1]+counter[2]+counter[3]+counter[4]+counter[5]) < 3){
        let arr2 = ['aa','bb','cc','alphaa','betab','gammac','ha','hb','hc','u','A','Radius_Umkreis','Radius_Inkreis','sa','sb','sc','w_alpha','w_beta','w_gamma'];
        for(let i=0 ;i<arr2.length;i++){
            if(!counter[i]){
                document.getElementById(arr2[i]).value = "";
            }
        }
    }
}

function display_new(){
    
    let arr1 = [ abc[0],abc[1],abc[2],abg_w[0],abg_w[1],abg_w[2],obj.ha,obj.hb,obj.hc,obj.u,obj.A,obj.ru,obj.ri,obj.sa,obj.sb,obj.sc,obj.w_alpha,obj.w_beta,obj.w_gamma];
    let arr2 = ['aa','bb','cc','alphaa','betab','gammac','ha','hb','hc','u','A','Radius_Umkreis','Radius_Inkreis','sa','sb','sc','w_alpha','w_beta','w_gamma'];
    for(let i=0 ;i<arr2.length;i++){
        //document.getElementById(arr2[i]).value = arr1[i] ;
        document.getElementById(arr2[i]).value = Math.round((arr1[i] + Number.EPSILON)*100 )/100 ;
    }
}






















