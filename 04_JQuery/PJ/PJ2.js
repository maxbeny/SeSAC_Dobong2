function changeImg(name) {
    if (name === "apple") {
      $("img").attr("src", "./img/apple.jpg");  
    } else if (name === "banana") {
      $("img").attr("src", "./img/bananas.jpg");
    } else if (name === "grape") {
      $("img").attr("src", "./img/grapes.jpg");
    } else if (name === "peach") {
      $("img").attr("src", "./img/peaches.jpg");
    }
  }