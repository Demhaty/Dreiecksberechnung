
var berechnung_weg =Array(20);
// berechnung_weg[ x: "", y: ""]
berechnung_weg=berechnung_weg.fill(0).map(x=>x={x:"",y:""});
let arr2 = ['aa','bb','cc','alphaa','betab','gammac','ha','hb','hc','u','A','Radius_Umkreis','Radius_Inkreis','sa','sb','sc','w_alpha','w_beta','w_gamma'];
for(let i=0;i<arr2.length;i++){
    berechnung_weg[i].x=arr2[i];
}
//
//  
// Berechnungsweg wurde durch Maus angezeigt
//
function B_weg(){
    
    if(berechnung_weg[19].x == 1){
        for(let i=0 ;i<berechnung_weg.length-1;i++){
            
            document.getElementById(berechnung_weg[i].x).addEventListener("mousemove",()=>{
                if(counter[i]){document.getElementById('Darstellung_B').innerHTML = "eingegebene Wert";}
                else{
                document.getElementById('Darstellung_B').innerHTML = berechnung_weg[i].y;
                }
            })
            
            document.getElementById(berechnung_weg[i].x).addEventListener("mouseout",()=>{
                document.getElementById('Darstellung_B').innerHTML = "";
            }) 
        }
    }
}
