var arr = [
    "https://media.istockphoto.com/id/1386446426/photo/badshahi-mosque.jpg?s=612x612&w=0&k=20&c=vShhc9rb17q_5k-tx_HJnlDvlE4YjCNNlOCEWplI2_Y=",
    "https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2020/08/Mazar-e-Quaid-B-14-08-1024x640.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/daodao/photo-o/14/e2/52/05/img-20180916-184638-largejpg.jpg?w=500&h=400&s=1",
    "https://tribune-reloaded.s3.amazonaws.com/media/images/2162950-minarepakistanx-1582517159/2162950-minarepakistanx-1582517159.jpg",
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
  
