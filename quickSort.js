import swap from "./swap.js"
function resolveAfter2Seconds(speed) {
    return new Promise(resolve => {
      setTimeout(() =>resolve(), speed);//delay(3)
    });
}
export default async function quickSort(){
    console.log("in quick sort")
    let com=document.getElementById("timeComplexity");
    com.style.color="white"
    com.innerHTML=""
    var sorting=document.getElementById("sortingname");
    sorting.innerHTML='<h3><center>Quick Sort<center></h3>'
    sorting.style.color="orange"

    var scale=document.getElementById("scale");
    document.getElementById("scale").innerHTML="";
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");
    const p6 = document.createElement("p");
    const p7 = document.createElement("p");
    const p8 = document.createElement("p");
    p3.style.backgroundColor="yellow"
    p3.style.margin="8px"
    p3.style.padding="1px"
    p3.style.height="10px";
    p3.style.width="10px";
    p7.style.backgroundColor="lightblue"
    p7.style.margin="8px"
    p7.style.padding="1px"
    p7.style.height="10px";
    p7.style.width="10px";
    p.style.backgroundColor="red"
    p.style.margin="8px"
    p.style.padding="1px"
    p.style.height="10px";
    p.style.width="10px";
    p5.style.backgroundColor="green"
    p5.style.margin="8px"
    p5.style.padding="1px"
    p5.style.height="10px";
    p5.style.width="10px";
    p2.innerHTML=`Left Pointer`
    p2.style.color="white"
    p4.innerHTML=`Pivot Element`
    p4.style.color="white"
    p6.innerHTML=`Right pointer`
    p6.style.color="white"
    p8.innerHTML=`pivot element is placed in its position`
    p8.style.color="white"
    scale.appendChild(p);
    scale.appendChild(p4);
    scale.appendChild(p3);
    scale.appendChild(p2);
    scale.appendChild(p5);
    scale.appendChild(p6);
    scale.appendChild(p7);
    scale.appendChild(p8);
    scale.style.display="flex"
    scale.style.justifyContent="center"


    var divno=document.getElementById("bar")
    let right=divno.getElementsByTagName('*').length
    quicksort(0,right-1)
}

async function quicksort(left, right) {
    var speed = document.getElementById("speed").value;
    console.log("in quick sort")
    console.log("in quick sort function")
    console.log("left",left)
    console.log("right",right)
    let exleft=left;
    let exright=right;
    if(left<right){
        let pivot=left
        let pivotid="e"+left;
        let leftid="e"+left;
        let rightid="e"+right;
        let l=document.getElementById(leftid)
        l.style.backgroundColor="yellow";
        let r=document.getElementById(rightid)
        r.style.backgroundColor="green"
        let p=document.getElementById(pivotid)
        p.style.backgroundColor="red"
        await resolveAfter2Seconds(speed)
        while(!(leftid===rightid)){
            console.log("!(Number(left)===Number(right))",!(leftid)===(rightid))
            while(parseInt(p.innerHTML)<parseInt(r.innerHTML)){
                right=right-1
                r.style.backgroundColor="white"
                rightid="e"+right
                r=document.getElementById(rightid)
                console.log("right",right)
                r.style.backgroundColor="green"
                await resolveAfter2Seconds(speed)
            }
                swap(pivot,right)
                p.style.backgroundColor="white"
                console.log("right after swap",right)
                pivot=right
                p=document.getElementById(rightid)
                console.log("pivot",pivot)
                console.log("right",right)
                p.style.backgroundColor="red"
                await resolveAfter2Seconds(speed)
                l=document.getElementById(leftid)
            while(parseInt(l.innerHTML)<parseInt(p.innerHTML)){
                console.log("in left and pivot loop")
                l.style.backgroundColor="white"
                left=left+1
                leftid="e"+left
                l=document.getElementById(leftid)
                console.log("left",l.innerHTML)
                l.style.backgroundColor="yellow"
                await resolveAfter2Seconds(speed)
            }
                swap(pivot,left)
                p.style.backgroundColor="white"
                p=document.getElementById(leftid)
                l.style.backgroundColor="red"
                await resolveAfter2Seconds(speed)
                pivot=left
                console.log("pivot",p.innerHTML)
                console.log("left",left)
        }
        l.style.backgroundColor="lightblue"
        console.log('left',left)
        console.log('right',right)
        console.log('pivot',pivot)
        quicksort(exleft,pivot-1);
        quicksort(pivot+1,exright);
    }
    let com=document.getElementById("timeComplexity");
    com.style.color="white"
    com.innerHTML=""
    com.innerHTML=`<center><h5>Best Time Complexity :  O(n log n)<br>Average Time Complexity :  O(n^2)<br>worst Time Complexity :  O(n^2)<br></h5></center>`
}