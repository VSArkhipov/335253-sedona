var link = document.querySelector(".modal-link");
var popup = document.querySelector(".modal-hidden");

var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");
var grownups = popup.querySelector("[name=grownups]");
var children = popup.querySelector("[name=children]");

var storage_grownups = localStorage.getItem("grownups");
var storage_children = localStorage.getItem("children");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-hidden");
	popup.classList.toggle("modal-show");
	popup.classList.remove("modal-error");
	if (storage) {
      grownups.value = storage_grownups;
	  children.value = storage_children;
    }
  });

  form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value || !grownups.value || !children.value) {
		evt.preventDefault(); 
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
		} else {
      localStorage.setItem("grownups", grownups.value, "children", children.value);
    }
  });