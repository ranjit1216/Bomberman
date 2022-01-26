const bombs=[];
let gamePoints=0;
let canPlay=true;

function updatedGamePoints(){
    const gamePointsElement=document.getElementById("gamePoints");
    gamePointsElement.innerHTML="gamepoints"+gamePoints;
}

function addGrid(){
    const appElement=document.getElementById("app") ;
    for( let i=0;i<9;i++){
        const row=document.createElement("div");
        for(let j=0;j<9;j++){
            const col=document.createElement("div");
            const index=i*9+j;
            col.style.display="inline-block";
            col.style.margin="2px";
            col.style.height='60px';
            col.style.width='60px';            
            col.style.border='1px solid black';            
            col.style.textAlign='center';            
            col.style.verticalAlign='center';   
            col.setAttribute("index",index); 

            col.addEventListener("click",function(){
                if(canPlay){
                if(bombs.includes(index)){
                    col.style.backgroundColor="red";
                    canPlay=false;
                }else{
                    col.style.backgroundColor="yellow";
                    gamePoints++;
                    updatedGamePoints();
                }
            }
            })
            row.appendChild(col);        

        }
        appElement.appendChild(row)
    }
}
function generatebombs(){
    while(bombs.length<10){
    const randumNo= Math.floor(Math.random()*100);
    if(randumNo<81 && !bombs.includes(randumNo)){  
        bombs.push(randumNo);
        }
    }
}
addGrid();
generatebombs();
console.log(bombs);