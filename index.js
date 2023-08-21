import bubbleSort from "./bubbleSort.js"
import selectionSort from "./selectionSort.js"
import insertionSort from "./insertionSort.js"
import quickSort from "./quickSort.js"

const bubble=document.getElementById("bubble")
const insertion=document.getElementById("insertion")
const quick=document.getElementById("quick")
const selection=document.getElementById("selection")
const sub=document.getElementById("submit")
sub.addEventListener("click",AcceptArray)

// let arr,speed,
async function AcceptArray(){
    var divno=document.getElementById("bar")
    const n=divno.getElementsByTagName('*').length;
    document.getElementById("timeComplexity").innerHTML=""
    document.getElementById("bar").innerHTML="";
    document.getElementById("scale").innerHTML="";
    const arr=new Array(document.getElementById("array").value)
    console.log("arr",arr.length)
    if((arr.length===1)&&(arr[0]==='')){
        alert("please enter array elements");
        throw "not a number"
    }
    const str=""+arr
    const arrOfStr=str.split(",")
    console.log(arrOfStr)
    try{
        window.arrOfNum = arrOfStr.map(str => {
            if(isNaN(Number(str))){
                throw "not a number";
            }
            return Number(str);
        });
    }
    catch(err){
        alert("please enter only numericals seperated with comma");
        return;
    }
    document.getElementById("sortingname").innerHTML='<h3><center>Array Representation</center></h3>';
    document.getElementById("sortingname").style.color="orange"
    for(let a in arrOfNum){
        let x=0
        const p = document.createElement("div");
        p.innerText = arrOfNum[a]; 
        console.log(arrOfNum[a]) 
        p.style.backgroundColor="white"
        p.style.margin="8px"
        p.style.padding="1px"
        p.style.fontSize="0.85em"
        x=10+arrOfNum[a]*3;
        p.style.height=x*2+"px"
        p.setAttribute('id','e'+a)
        document.getElementById("bar").appendChild(p);
    }

    document.getElementById("bar").style.display="flex"
    document.getElementById("bar").style.justifyContent="center"
    selection.addEventListener("click",selectionSort)
    insertion.addEventListener("click",insertionSort)
    bubble.addEventListener("click",bubbleSort)
    quick.addEventListener("click",quickSort)
}