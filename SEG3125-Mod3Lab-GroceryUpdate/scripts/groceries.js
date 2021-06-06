/*Name: S.N.Jayasooriya A.D.
Student ID: 8786771
SEG3125 Lab3
Grocery Store Upgrade - Grocery List

Created using tutorials/inspiration from source:
https://www.w3schools.com/js/default.asp
Barriere, C (2021) SEG3125-Module2-Grocery [Source code] 
https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module2-Grocery
*/

// Array of products, each product is an object with different fieldset
var products = [
	{
		name: "1 Loaf Bread",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		vegan: true,
		price: 2.32,
		img: "Images/bread.jpg",
		category: "grain"
	},
	{
		name: "Fettuccine Pasta (900g)",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 2.89,
		img: "Images/pasta.jpg",
		category: "grain"
	},
	{
		name: "1 Organic Avacodo",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		vegan: true,
		price: 1.75,
		img: "Images/avacado.jpg",
		category: "fruit"
	},
	{
		name: "1 Organic Banana ",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		vegan: true,
		price: 0.35,
		img: "Images/banana.jpg",
		category: "fruit"
	},
		{
		name: "1 Organic Tomato ",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		vegan: true,
		price: 0.89,
		img: "Images/tomato.jpg",
		category: "fruit"
	},
	{
		name: "1 Organic Cucumber",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		vegan: true,
		price: 1.15,
		img: "Images/cucumber.jpg",
		category: "fruit"
	},
	{
		name: "Cheddar Cheese (400g)",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 6.29,
		img: "Images/cheese.jpg",
		category: "dairy"
	},
	{
		name: "Milk 2% (4L)",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 5.72,
		img: "Images/milk.jpg",
		category: "dairy"
	},
	{
		name: "Organic Yogurt (750g)",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		vegan: false,
		price: 8.12,
		img: "Images/yogurt.jpg",
		category: "dairy"
	},
	{
		name: "Dozen White Eggs",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		vegan: false,
		price: 3.45,
		img: "Images/eggs.jpg",
		category: "meat"
	},
	{
		name: "1 Salmon Fillet",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 16.55,
		img: "Images/salmon.jpg",
		category:"meat"
	},
	{
		name: "1 Whole Chicken",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 13.25,
		img: "Images/chicken.jpg",
		category:"meat"
	},
	{
		name: "Almond Milk (950ml)",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		vegan: true,
		price: 5.99,
		img: "Images/almondmilk.jpg",
		category: "vegan"
	},
	{
		name: "Tofu (350g)",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		vegan: true,
		price: 3.99,
		img: "Images/tofu.jpg",
		category: "vegan"
	},
	{
		name: "Plant-Based Burger (20g)",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		vegan: true,
		price: 5.76,
		img: "Images/plantburger.jpg",
		category: "vegan"
	},
	{
		name: "Coca-Cola Peach/ \u30d4\u30fc\u30c1 (250ml)",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 1.25,
		img: "Images/peachcoke.jpg",
		category: "international"
	},
	{
		name: "Kit-Kat Variety Pack 12/ \u30ad\u30c3\u30c8 \u30ab\u30c3\u30c8 12",
		lactoseFree: false,
		nutFree: false,
		organic: false,
		vegan: false,
		price: 9.57,
		img: "Images/kitkat.jpg",
		category: "international"
	},
	{
		name: "Pretz/ \u30d7\u30ea\u30c3\u30c4 (2 pack)",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		vegan: true,
		price: 2.57,
		img: "Images/pretz.jpg",
		category: "international"
	},
	{
		name: "Umaibo Snack/ \u3046\u307e\u3044 ",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		vegan: true,
		price: 1.43,
		img: "Images/umaibo.jpg",
		category: "international"
	},
	{
		name: "Kikkoman Soy Sauce/ \u30ad\u30c3\u30b3\u30fc\u30de\u30f3 (590ml)",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		vegan: true,
		price: 5.67,
		img: "Images/soysauce.jpg",
		category: "international"
	},
	{
		name: "Shin Ramyun noodles/ \uc2e0\ub77c\uba74 (4 pack)",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 5.75,
		img: "Images/ramen.jpg",
		category: "international"
	},
	{
		name: "Kimchi/ \uae40\uce58 (750g)",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		vegan: true,
		price: 9.89,
		img: "Images/kimchi.jpg",
		category: "international"
	},
	{
		name: "Butter Chicken Sauce (400ml)",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 2.89,
		img: "Images/butterchicken.jpg",
		category: "international"
	},
	{
		name: "Tikka Masala Mix (285g)",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 2.77,
		img: "Images/tikka.jpg",
		category: "international"
	},
	{
		name: "Falafel Mix (150g)",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		vegan: true,
		price: 3.39,
		img: "Images/falafel.jpg",
		category: "international"
	},
	{
		name: "Doritos (235g)",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		vegan: true,
		price: 2.29,
		img: "Images/doritos.jpg",
		category: "snack"
	},
		{
		name: "Nutella (725g)",
		lactoseFree: false,
		nutFree: false,
		organic: false,
		vegan: false,
		price: 3.43,
		img: "Images/nutella.jpg",
		category: "snack"
	},
	{
		name: "Peanut Butter(900g)",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		vegan: true,
		price: 2.97,
		img: "Images/peanutbutter.jpg",
		category: "snack"
	},
	{
		name: "Chips Ahoy (6 pack)",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 2.46,
		img: "Images/cookies.jpg",
		category: "snack"
	},
	{
		name: "Veggie Chips(142g)",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		vegan: true,
		price: 2.70,
		img: "Images/veggiechips.jpg",
		category: "snack"
	},
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Lactose-Intolerant") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Nut-Allergy") && (prods[i].nutFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Vegan") && (prods[i].vegan == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Lactose-Intolerant & Nut-Allergy") && (prods[i].lactoseFree == true) && (prods[i].nutFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Lactose-Intolerant & Vegan") && (prods[i].lactoseFree == true) && (prods[i].vegan == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Lactose-Intolerant & Organic") && (prods[i].lactoseFree == true) && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Nut-Allergy & Vegan") && (prods[i].nutFree == true) && (prods[i].vegan == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Nut-Allergy & Organic") && (prods[i].nutFree == true) && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Vegan & Organic") && (prods[i].vegan == true) && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
	    else if ((restriction == "Lactose-Intolerant & Nut-Allergy & Organic") && (prods[i].lactoseFree == true) && (prods[i].nutFree == true) && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Lactose-Intolerant & Vegan & Organic") && (prods[i].lactoseFree == true) && (prods[i].vegan == true) && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Lactose-Intolerant & Nut-Allergy & Vegan") && (prods[i].lactoseFree == true) && (prods[i].nutFree == true) && (prods[i].vegan == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Nut-Allergy & Vegan & Organic") && (prods[i].organic == true) && (prods[i].nutFree == true) && (prods[i].vegan == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Lactose-Intolerant & Nut-Allergy & Vegan & Organic") && (prods[i].lactoseFree == true) && (prods[i].nutFree == true) && (prods[i].vegan == true) && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "No Preference"){
			product_names.push(prods[i]);
		}
	}
	return product_names;

}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}