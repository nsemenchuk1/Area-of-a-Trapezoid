// Area of a Trapezoid

// Event Listener
document.getElementById("calculate").addEventListener("click", calculateArea);

// Function
function calculateArea() {
  // Input
  let b1 = +document.getElementById("input1").value;
  let b2 = +document.getElementById("input2").value;
  let h = +document.getElementById("input3").value;
  let round = +document.getElementById("input4").value;

  document.getElementById("img1").src = "images/check.png";
  document.getElementById("img2").src = "images/check.png";
  document.getElementById("img3").src = "images/check.png";
  document.getElementById("img4").src = "images/check.png";

  // Process
  let area = (1 / 2) * (b1 + b2) * h;
  area = area.toFixed(round);

  // Output
  document.getElementById("output").innerHTML = area;
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";
  document.getElementById("input4").value = "";
  document.getElementById("img1").style.width = "20px";
  document.getElementById("img2").style.width = "20px";
  document.getElementById("img3").style.width = "20px";
  document.getElementById("img4").style.width = "20px";
}
