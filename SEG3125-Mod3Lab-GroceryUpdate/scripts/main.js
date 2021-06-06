/*Name: S.N.Jayasooriya A.D.
Student ID: 8786771
SEG3125 Lab3 
Grocery Store Upgrade - Main JS File

Created using tutorials/inspiration from source:
https://www.w3schools.com/js/default.asp
Barriere, C (2021) SEG3125-Module2-Grocery [Source code] 
https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module2-Grocery
*/

// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}
//This script is taken from https://www.w3schools.com/howto/howto_js_accordion.asp
var acc = document.getElementsByClassName("accordion");
var i;
for (var i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        console.log(panel);
        if (panel.style.display === "flex") {
            panel.style.display = "none";
        }else{
        	panel.style.display = "flex";
        }
    });
}

// Function that handles Customer preferences
function prefCustomer() {
	var w = document.getElementById("Lactose-Intolerant").checked;
	var x = document.getElementById("Nut-Allergy").checked;
	var y = document.getElementById("Vegan").checked;
	var z = document.getElementById("Organic").checked;
	
	if (w == true) {
		populateListProductChoices("Lactose-Intolerant",'displayGrain', 'displayFruit', 'displayDairy', 'displayMeat','displayAlt', 'displayInt')
	}
	else if (x == true) {
		populateListProductChoices("Nut-Allergy",'displayGrain', 'displayFruit', 'displayDairy', 'displayMeat','displayAlt', 'displayInt')
	}
	else if (y == true) {
		populateListProductChoices("Vegan",'displayGrain', 'displayFruit', 'displayDairy', 'displayMeat','displayAlt', 'displayInt')
	}
	else if (z == true) {
		populateListProductChoices("Organic",'displayGrain', 'displayFruit', 'displayDairy', 'displayMeat','displayAlt', 'displayInt')
	}
	else if (w == true && x==true) {
		populateListProductChoices("Lactose-Intolerant & Nut-Allergy",'displayGrain', 'displayFruit', 'displayDairy', 'displayMeat','displayAlt', 'displayInt')
	}
	else if (w == true && y ==true) {
		populateListProductChoices("Lactose-Intolerant & Vegan",'displayGrain', 'displayFruit', 'displayDairy', 'displayMeat','displayAlt', 'displayInt')
	}
	else if (w == true && z ==true) {
		populateListProductChoices("Lactose-Intolerant & Organic",'displayGrain', 'displayFruit', 'displayDairy', 'displayMeat','displayAlt', 'displayInt')
	}
	else if(x == true && y == true) {
		populateListProductChoices("Nut-Allergy & Vegan",'displayGrain', 'displayFruit', 'displayDairy', 'displayMeat','displayAlt', 'displayInt')
	}
	else if(x == true && z == true) {
		populateListProductChoices("Nut-Allergy & Organic",'displayGrain', 'displayFruit', 'displayDairy', 'displayMeat','displayAlt', 'displayInt')
	}
	else if (y == true && z == true) {
		populateListProductChoices("Vegan & Organic",'displayGrain', 'displayFruit', 'displayDairy', 'displayMeat','displayAlt', 'displayInt')
	}
	else if (w == true && x == true && y == true) {
		populateListProductChoices("Lactose-Intolerant & Nut-Allergy & Vegan",'displayGrain', 'displayFruit', 'displayDairy', 'displayMeat','displayAlt', 'displayInt')
	}
	else if (w == true && x == true && z == true) {
		populateListProductChoices("Lactose-Intolerant & Nut-Allergy & Organic",'displayGrain', 'displayFruit', 'displayDairy', 'displayMeat','displayAlt', 'displayInt')
	}
	else if (w == true && y == true && z == true) {
		populateListProductChoices("Lactose-Intolerant & Vegan & Organic",'displayGrain', 'displayFruit', 'displayDairy', 'displayMeat','displayAlt', 'displayInt')
	}
	else if (x == true && y == true && z == true) {
		populateListProductChoices("Nut-Allergy & Vegan & Organic",'displayGrain', 'displayFruit', 'displayDairy', 'displayMeat','displayAlt', 'displayInt')
	}
	else if (w == true && x == true && y == true && z ==true) {
		populateListProductChoices("Lactose-Intolerant & Nut-Allergy & Vegan & Organic",'displayGrain', 'displayFruit', 'displayDairy', 'displayMeat','displayAlt', 'displayInt')
	}
	else {
		populateListProductChoices("No Preference",'displayGrain', 'displayFruit', 'displayDairy', 'displayMeat','displayAlt', 'displayInt')
	}
}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2, slct3, slct4, slct5, slct6, slct7) {
    var s1 = slct1; //document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
    var s3 = document.getElementById(slct3);
    var s4 = document.getElementById(slct4);
    var s5 = document.getElementById(slct5);
    var s6 = document.getElementById(slct6);
    var s7 = document.getElementById(slct7);

	// s2-s7 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
    s3.innerHTML = "";
    s4.innerHTML = "";
    s5.innerHTML = "";
    s6.innerHTML = "";
    s7.innerHTML = "";

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1);

    // Line below adapted from https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_object1
    optionArray.sort(function(a,b) {return a.price - b.price});

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		var image = productName.img;

		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName.name;
		
		// create a label for the checkbox, and also add in HTML DOM
		var picture = document.createElement("IMG");
		picture.setAttribute("src", image);
		picture.setAttribute("width", "150");
 		picture.setAttribute("height", "150");
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName.name;
		label.appendChild(document.createTextNode(productName.name + " $ " + productName.price));

		//Checks what section of accordion structure product should go into
		if(productName.category === 'grain') {
			s2.appendChild(document.createElement("br"));
			s2.appendChild(checkbox);
			s2.appendChild(picture);
			s2.appendChild(document.createElement("br"));
			s2.appendChild(checkbox);
			s2.appendChild(label);
		}
		else if(productName.category === 'fruit') {
			s3.appendChild(document.createElement("br"));
			s3.appendChild(checkbox);
			s3.appendChild(picture);
			s3.appendChild(document.createElement("br"));
			s3.appendChild(checkbox);
			s3.appendChild(label);
		}
		else if(productName.category === 'dairy') {
			s4.appendChild(document.createElement("br"));
			s4.appendChild(checkbox);
			s4.appendChild(picture);
			s4.appendChild(document.createElement("br"));
			s4.appendChild(checkbox);
			s4.appendChild(label);
		}
		else if(productName.category === 'meat') {
			s5.appendChild(document.createElement("br"));
			s5.appendChild(checkbox);
			s5.appendChild(picture);
			s5.appendChild(document.createElement("br"));
			s5.appendChild(checkbox);
			s5.appendChild(label);
		}
		else if(productName.category === 'vegan') {
			s6.appendChild(document.createElement("br"));
			s6.appendChild(checkbox);
			s6.appendChild(picture);
			s6.appendChild(document.createElement("br"));
			s6.appendChild(checkbox);
			s6.appendChild(label);
		}
		else {
			s7.appendChild(document.createElement("br"));
			s7.appendChild(checkbox);
			s7.appendChild(picture);
			s7.appendChild(document.createElement("br"));
			s7.appendChild(checkbox);
			s7.appendChild(label);
		}
	}
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts).toFixed(2)));
}