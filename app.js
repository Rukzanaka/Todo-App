const form1 = document.querySelector("#addForm");

let items = document.getElementById("items");
let submit = document.getElementById("submit");

let editItem = null;

items.addEventListener("click", removeItem);

form1.addEventListener("submit", addItem =(e) =>{

	e.preventDefault();

	if (submit.value != "Submit") {

		editItem.target.parentNode.childNodes[0].data
			= document.getElementById("item").value;

		submit.value = "Submit";
		document.getElementById("item").value = "";

		document.getElementById("lbl").innerHTML
			= "Edited successfully";

		document.getElementById("lbl").style.display = "block";
	}
    
	let newItem = document.getElementById("item").value;
	if (newItem.trim() == "" || newItem.trim() == null)
		return false;
	else
		document.getElementById("item").value = "";
    
	let li = document.createElement("li");
	li.classList.add('li');
  
  	const deleteButton =  document.createElement('button');
  	deleteButton.classList.add('delete');

 	deleteButton.appendChild(document.createTextNode("Delete"));



	let editButton = document.createElement("button");

	editButton.classList.add('edit');

	editButton.appendChild(document.createTextNode("Edit"));

	li.appendChild(document.createTextNode(newItem));
	li.appendChild(deleteButton);
	li.appendChild(editButton);

	items.appendChild(li);

});
	
function removeItem(e) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		if (confirm("Are you delete")) {
			let li = e.target.parentNode;
			items.removeChild(li);
			document.getElementById("lbl").innerHTML
				= "Deleted successfully";
      
			document.getElementById("lbl");

			setTimeout(function() {
				document.getElementById("lbl");
			}, 3000);
		}
	}
	if (e.target.classList.contains("edit")) {
		document.getElementById("item").value =
			e.target.parentNode.childNodes[0].data;
		submit.value = "EDIT";
		editItem = e;
	}
}

var toggleButton = (ref, btnID) =>{
  document.getElementById(btnID).disabled = false;
}
