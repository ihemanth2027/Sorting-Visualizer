import swap from "./swap.js"
// const s= require("./swap.js")
function resolveAfter2Seconds(speed) {
    return new Promise(resolve => {
      setTimeout(() =>resolve(), speed);//delay(3)
    });
}
export default async function bubbleSort(){
    let com=document.getElementById("timeComplexity");
    com.style.color="white"
    com.innerHTML=""
    var sorting=document.getElementById("sortingname");
    sorting.innerHTML='<h3><center>Bubble Sort<center></h3>'
    sorting.style.color="orange"

    var scale=document.getElementById("scale");
    document.getElementById("scale").innerHTML="";
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    p.style.backgroundColor="yellow"
    p.style.margin="8px"
    p.style.padding="1px"
    p.style.height="10px";
    p.style.width="10px";
    p2.innerHTML=`Elements compared`
    p2.style.color="white"
    scale.appendChild(p);
    scale.appendChild(p2);
    scale.style.display="flex"
    scale.style.justifyContent="center"
    

    var speed = document.getElementById("speed").value;
    var divno=document.getElementById("bar");
    const n=divno.getElementsByTagName('*').length;
    var i,j;
    for (i = 0; i <n; i++)
    {
        for (j = 0; j < n-i-1; j++)
        {   
            let id="e"+j
            let id2="e"+(j+1)
            let x=document.getElementById(id)
            let y=document.getElementById(id2)
            x.style.backgroundColor="yellow"
            y.style.backgroundColor="yellow"
            if(parseFloat(x.innerHTML)> parseFloat(y.innerHTML))
            {
                swap(j,j+1);
                
            }
            await resolveAfter2Seconds(speed)
            x.style.backgroundColor="white"
            y.style.backgroundColor="white"
        }
      
    }
    
    com.innerHTML=`<center><h5>Best Time Complexity :  O(n)<br>Average Time Complexity :  O(n^2)<br>worst Time Complexity :  O(n^2)<br></h5></center>`
}