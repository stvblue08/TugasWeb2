import $ from "jquery";

export const button = (element) => {
  $(document).ready(function(){
    const texts = ["Hello World","ZELAMAT DATANG INFORMATIKA22", "KOFTTE"];
    let index = 0;
    
    element.click(function(){
      console.log("ekhm")
        index = (index + 1) % texts.length;  
        $("#heading").text(texts[index]);    
    });
});
}
