//
// berechnung_weg speichert in jeder index (Berechnungsweg in y und id in x) => (berechnung_weg[ x: "", y: ""])
//  holt gerade alle Id
// 
var berechnung_weg =Array(20);
berechnung_weg=berechnung_weg.fill(0).map(x=>x={x:"",y:""});
let arr2 = ['aa','bb','cc','alphaa','betab','gammac','ha','hb','hc','u','A','Radius_Umkreis','Radius_Inkreis','sa','sb','sc','w_alpha','w_beta','w_gamma'];
for(let i=0;i<arr2.length;i++){
    berechnung_weg[i].x=arr2[i];
}
//  
// Berechnungsweg wird durch Maus angezeigt
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
//
// Werte auf Felder werden gelöscht
// 
function alles_loschen(){
    let arr2 = ['a','b','c','alpha','beta','gamma','aa','bb','cc','alphaa','betab','gammac','ha','hb','hc','u','A','Radius_Umkreis','Radius_Inkreis','sa','sb','sc','w_alpha','w_beta','w_gamma'];
    for(let i = 0;i<arr2.length;i++){
        document.getElementById(arr2[i]).value = "";
        if(i<6){counter[i]=0;}
    }
}
