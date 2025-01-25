let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

//HTML scroll effect//
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
document.getElementById('showFormBtn').addEventListener('click', function() {
  var formContainer = document.getElementById('formContainer');
  formContainer.classList.toggle('show');
  if (formContainer.classList.contains('show')) {
      formContainer.style.display = 'block';
  } else {
      formContainer.style.display = 'none';
  }
});
