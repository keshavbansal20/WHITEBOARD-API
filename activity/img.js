let imageUpload = document.querySelector("#photo-upload");
let upload = document.querySelector("#upload");

let download = document.querySelector("#download");

upload.addEventListener("click" , function(){
    imageUpload.click();
})

imageUpload.addEventListener("change", function(){
    let fileObject = imageUpload.files[0];
    let filePath = URL.createObjectURL(fileObject);
    
    let img =document.createElement("img")
    img.setAttribute("src" , filePath);
    img.classList.add("photo")
    let stickyContent = createSticky();
    stickyContent.appendChild(img);

})

download.addEventListener("click", function(){
    let filePath = canvas.toDataURL("image/png")
    let aTag = document.createElement('a')
 //<a href = "" download = "filename.png"></a>
   aTag.setAttribute("download", "canvas.png");
   aTag.setAttribute("href",filePath);
   aTag.click()
   aTag.remove();
})
