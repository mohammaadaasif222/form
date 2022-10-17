function validateForm() {
  let name = document.getElementById("name").value;
  let pass = document.getElementById("password").value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }if (pass.length < 8) {
    alert("password to short");
  }
}
function move() {
  const btn = document.getElementById("btn-container");
  if (!btn.classList.contains("btn-holder")) {
    btn.classList.add("btn-holder");
  } else {
    btn.classList.remove("btn-holder");
  }
}
