AFRAME.registerComponent("marker-handler",{
    inite:async function(){
        this.el.addEventListener("markerFound",()=>{
            this.handleMarkerFound();
        });
        this.el.addEventListener("markerLost",()=>{
            this.handleMarkerLost();
        });    
    },
    handleMarkerFound:function(){
     var buttonDiv=document.getElementById("button-div");
     buttonDiv.style.display="flex";
     var ratingButton=document.getElementById("rating-button");
     var orderButton=document.getElementById("order-button");

     ratingButton.addEventListener("click",function(){
       swal({
           icon:"waring",
           title:"rate dish",
           text:"work in progress",
       });
     });
     orderButton.addEventListener("click",function(){
        swal({
            icon:"https://i.imgur.com/4NZ6uLY.jpg",
            title:"thanks for ordering",
            text:"your order will be served soon at your table",
        });
     });
    },
    handleMarkerLost:function(){
     var buttonDiv=document.getElementById("button-div");
     buttonDiv.style.display="none";
    },
});