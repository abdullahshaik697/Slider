var arr = [
    "https://encrypted-tbn0.gstatic.com/imagesq=tbn:ANd9GcSGjkXbED_Y4jEzRI2SzQXeL3hjZ_lkAuUu2g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqpfePoJjLEOUbjnPVxdIwwonaAZRGcP5_5w&s",
    "https://dynamic-media-cdn.tripadvisor.com/media/daodao/photo-o/14/e2/52/05/img-20180916-184638-largejpg.jpg?w=500&h=400&s=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEbXHbost5JWZXQ4dAWRucleSkn3EyLrM2mw&s",
    "https://cdn.virily.com/wp-content/uploads/2017/12/Lahore_fort_with_Pakistani_Flag.jpg"
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
  
