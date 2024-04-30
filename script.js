let photo = document.getElementById("pic");
let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("prev")

let imageArr = ['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg']
let index = 0;

nextBtn.addEventListener("click", ()=>{
  index++;
  if(index >= imageArr.length){
    index = 0;
  }
  photo.src = imageArr[index];
});

prevBtn.addEventListener("click", ()=>{
  index--;
  if(index < 0){
    index = imageArr.length-1;
  }
  photo.src = imageArr[index]
})