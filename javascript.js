//reset
function reset() {
  document.querySelector(".block.center-content").innerHTML =
    '<img src="images/adult_swim.png" id="t1" />';
  document.getElementById("click").play(); //click sound
}
//video
function loadVideo(videoId) {
  document.querySelector(".block.center-content").innerHTML = `
    <iframe width="100%" height="100%"
      src="https://www.youtube.com/embed/${videoId}?autoplay=1"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen></iframe>
  `;
}

// Videos
function playVideo() {
  loadVideo("W0-IpoyEHkE"); // king of the hill
  document.getElementById("click").play(); //click sound
}

function playVideo2() {
  loadVideo("Tp_uzFNQLfY"); // ATHF
  document.getElementById("click").play(); //click sound
}

function playVideo3() {
  loadVideo("CKiXWzL7uOg"); // boondocks
  document.getElementById("click").play(); //click sound
}

function playVideo4() {
  loadVideo("8KH97Sp5jRE"); // bobs burgers
  document.getElementById("click").play(); //click sound
}

function playVideo5() {
  loadVideo("WJOAvttDJ-Q"); // family guy
  document.getElementById("click").play(); //click sound
}

function playVideo6() {
  loadVideo("3fKNf5dLA_M"); // american dad
  document.getElementById("click").play(); //click sound
}
