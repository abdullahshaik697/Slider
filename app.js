var arr = [
    "./assets/1.jpg",
    "./assets/2.jpg",
    "./assets/3.jpg",
    "./assets/4.jpg",
    "./assets/5.jpg"
]

console.log(arr);

var previousBtn =document.getElementById("button-1")
var nextBtn =document.getElementById("button-2")
var image =document.getElementById("image")

var count = 0;

function previous(){
    count-=1;
    image.src=arr[count];
    nextBtn.disabled=false;
    if(count==0){
        previousBtn.disabled=true;
    }
}

function next(){
    if(count<=4){
        count+=1;
        image.src=arr[count]
        previousBtn.disabled=false;
    }
    if(count==4){
        nextBtn.disabled=true;
    }
}
