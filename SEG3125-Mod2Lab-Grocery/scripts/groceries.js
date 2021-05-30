/*Name: S.N.Jayasooriya A.D.
Student ID: 8786771
SEG3125 Lab2 
Grocery Store - Grocery List

Created using tutorials/inspiration from source:
https://www.w3schools.com/js/default.asp
Barriere, C (2021) SEG3125-Module2-Grocery [Source code] 
https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module2-Grocery
*/

// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "ramen noodles",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 0.75
	},
	{
		name: "bananas (5 in a bunch)",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.45
	},
	{
		name: "avacodo",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 1.75
	},
	{
		name: "1 pack of strawberries",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 2.05
	},
	{
		name: "1 bunch brocoli",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 2.15
	},
	{
		name: "yogurt",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 2.25
	},
	{
		name: "dozen eggs",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 3.45
	},
	{
		name: "penut butter (725g)",
		lactoseFree: false,
		nutFree: false,
		organic: false,
		price: 4.50
	},
	{
		name: "hazelnut spread (725g)",
		lactoseFree: false,
		nutFree: false,
		organic: false,
		price: 4.50
	},
	{
		name: "almond milk",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 5.99
	},
	{
		name: "trail mix",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 6.89
	},
	{
		name: "cheese",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 7.89
	},
	{
		name: "goat milk",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 8.99
	},
	{
		name: "chicken",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 13.99
	},
	{
		name: "salmon",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 21.55
	}
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Lactose-Intolerant") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
		}
		else if ((restriction == "Lactose-Intolerant & Nut-Allergy") && (prods[i].lactoseFree == true) && (prods[i].nutFree == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
		}
		else if ((restriction == "Lactose-Intolerant & Organic") && (prods[i].lactoseFree == true) && (prods[i].organic == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
		}
	    else if ((restriction == "Lactose-Intolerant & Nut-Allergy & Organic") && (prods[i].lactoseFree == true) && (prods[i].nutFree == true) && (prods[i].organic == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
		}
		else if ((restriction == "Nut-Allergy") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
		}
		else if ((restriction == "Nut-Allergy & Organic") && (prods[i].nutFree == true) && (prods[i].organic == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
		}
		else if (restriction == "No Preference"){
			product_names.push(prods[i].name);
			product_names.push(prods[i].price);
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