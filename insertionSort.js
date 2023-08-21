import swap from "./swap.js"
function resolveAfter2Seconds(speed) {
    return new Promise(resolve => {
      setTimeout(() =>resolve(), speed);//delay(3)
    });
}
export default async function insertionSort(){
    let com=document.getElementById("timeComplexity");
    com.style.color="white"
    com.innerHTML=""

    var sorting=document.getElementById("sortingname");
    sorting.innerHTML='<h3><center>Insertion Sort<center></h3>'
    sorting.style.color="orange"

    var scale=document.getElementById("scale");
    document.getElementById("scale").innerHTML="";
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    p3.style.backgroundColor="yellow"
    p3.style.margin="8px"
    p3.style.padding="1px"
    p3.style.height="10px";
    p3.style.width="10px";
    p.style.backgroundColor="green"
    p.style.margin="8px"
    p.style.padding="1px"
    p.style.height="10px";
    p.style.width="10px";
    p2.innerHTML=`Element compared`
    p2.style.color="white"
    p4.innerHTML=`sorted array`
    p4.style.color="white"
    scale.appendChild(p);
    scale.appendChild(p4);
    scale.appendChild(p3);
    scale.appendChild(p2);
    scale.style.display="flex"
    scale.style.justifyContent="center"


    var speed = document.getElementById("speed").value;
    var divno=document.getElementById("bar")
    const n=divno.getElementsByTagName('*').length;
    var i,j
    let a1="e"+0
    let ini=document.getElementById(a1)
    ini.style.backgroundColor="green"
    await resolveAfter2Seconds(speed)
    for (i = 1; i < n; i++) { 
        let acti=i; 
        let id="e"+i
        let ele = document.getElementById(id)
        console.log("yellow1")
        ele.style.backgroundColor="yellow"
        j = i - 1;
        let tmpid="e"+j
        let temp = document.getElementById(tmpid)
        console.log("yellow2")
        temp.style.backgroundColor="green"
        await resolveAfter2Seconds(speed)
        while(j>=0 && parseFloat(ele.innerHTML)<= parseFloat(temp.innerHTML)){
            console.log("in while loop")
            console.log("j>=0",j>=0)
            console.log("ele.innerHTML",ele.innerHTML)
            console.log("temp.innerHTML",temp.innerHTML)
            ele.style.backgroundColor="yellow"
            console.log("parseInt(ele.innerHTML)<= parseInt(temp.innerHTML)",parseInt(ele.innerHTML)<= parseInt(temp.innerHTML))
            swap(j,i);
            console.log("temp",tmpid)
            ele.style.backgroundColor="green";
            await resolveAfter2Seconds(speed)
            i=i-1;
            j=j-1;
            id="e"+i
            ele = document.getElementById(id)
            if(j>-1){
                tmpid="e"+j
                temp = document.getElementById(tmpid)
                temp.style.backgroundColor="green"
            }
        }
        i=acti
    }
    com.innerHTML=`<center><h5>Best Time Complexity :  O(n)<br>Average Time Complexity :  O(n^2)<br>worst Time Complexity :  O(n^2)<br></h5></center>`  
}