$(".temperature-button").click(function() {
    let temperature = Number($(".temperature-input").val());
    
    if(temperature <= 10) {
        $(".output").text("Dont go out");
    }  else if(temperature <= 50){
        $(".output").text("Wear a winter jacket");
    }else if(temperature <= 70){
        $(".output").text("Wear a light jacket");
    } else if(temperature <= 80){
        $(".output").text("Wear a t-shirt");
    } else if(temperature <= 90){
        $(".output").text("Wear shorts");
    }


   
});