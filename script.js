//selecting required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = ()=>{  //once window loaded
    filterItem.onclick = (selectedItem)=>{
        //user click on filteritem 
        if (selectedItem.target.classList.contains("item")){//click element has .item class
               filterItem.querySelector(".active").classList.remove("active"); //remove active class , in first element
               selectedItem.target.classList.add("active"); //active class on selected element or item
               let filterName = selectedItem.target.getAttribute("data-name"); //getting selected item data-name & storing
               filterImg.forEach((image)=>{
                let filterImages = image.getAttribute("data-name");//getting img data-name
                 if((filterImages == filterName) || filterName == "all"){
                    image.classList.remove("hide");
                    image.classList.add("show");
                 }else{
                    image.classList.add("hide");
                    image.classList.remove("show");

                 }
               })
        }
    }
    for (let index = 0; index < filterImg.length; index++) {
        filterImg[index].setAttribute("onclick", "preview(this)"); //onclick attribute for all images
        
    }

}

//selecting elemrnt for preview-box
const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".title p"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

//preview img function
function preview(element){
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector("img").src; //getting clicked img & storing
    let selectedCategory = element.getAttribute("data-name"); // getting name
    categoryName.textContent =selectedCategory; 
    previewImg.src = selectedPrevImg;  //passing clicked img
    previewBox.classList.add("show");   //show preview box 
    shadow.classList.add("show");   //show light grey background 
    
    closeIcon.onclick =()=>{
        previewBox.classList.remove("show"); //hide preview box 
        shadow.classList.remove("show");  //hide light grey background
        document.querySelector("body").style.overflow = "scroll";
        
    }
}