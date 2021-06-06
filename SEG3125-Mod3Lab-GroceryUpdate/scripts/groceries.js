var products = [
	{
		name: "bread",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		vegan: true,
		price: 2.32,
		img: "Images/bread.jpg",
		category: "grain"
	},
	{
		name: "pasta",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 2.89,
		img: "Images/pasta.jpg",
		category: "grain"
	},
	{
		name: "avacodo (organic)",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		vegan: true,
		price: 1.75,
		img: "Images/avacado.jpg",
		category: "fruit"
	},
	{
		name: "banana (organic)",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		vegan: true,
		price: 0.35,
		img: "Images/banana.jpg",
		category: "fruit"
	},
		{
		name: "tomato (organic)",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		vegan: true,
		price: 0.89,
		img: "Images/tomato.jpg",
		category: "fruit"
	},
	{
		name: "cucumber (organic)",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		vegan: true,
		price: 1.15,
		img: "Images/cucumber.jpg",
		category: "fruit"
	},
	{
		name: "cheese",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 6.29,
		img: "Images/cheese.jpg",
		category: "dairy"
	},
	{
		name: "milk 2%",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 5.72,
		img: "Images/milk.jpg",
		category: "dairy"
	},
	{
		name: "yogurt (organic)",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		vegan: false,
		price: 8.12,
		img: "Images/yogurt.jpg",
		category: "dairy"
	},
	{
		name: "dozen eggs",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		vegan: false,
		price: 3.45,
		img: "Images/eggs.jpg",
		category: "meat"
	},
	{
		name: "salmon",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 21.55,
		img: "Images/salmon.jpg",
		category:"meat"
	},
	{
		name: "chicken",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 13.25,
		img: "Images/chicken.jpg",
		category:"meat"
	},
	{
		name: "almond milk",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		vegan: true,
		price: 5.99,
		img: "Images/almondmilk.jpg",
		category: "vegan"
	},
	{
		name: "tofu",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		vegan: true,
		price: 3.99,
		img: "Images/tofu.jpg",
		category: "vegan"
	},
	{
		name: "plant based-burger",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		vegan: true,
		price: 5.76,
		img: "Images/plantburger.jpg",
		category: "vegan"
	},
	{
		name: "Coca-Cola (peach - \u30d4 \u30fc \u30c1)",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 1.25,
		img: "Images/peachcoke.jpg",
		category: "international"
	},
	{
		name: "Kit-Kat Variety Pack ( \u30ad \u30c3 \u30c8 \u30ab \u30c3 \u30c8 )",
		lactoseFree: false,
		nutFree: false,
		organic: false,
		vegan: false,
		price: 9.57,
		img: "Images/kitkat.jpg",
		category: "international"
	},
	{
		name: "Pretz ( \u30d7 \u30ea \u30c3 \u30c4 )",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		vegan: true,
		price: 2.57,
		img: "Images/pretz.jpg",
		category: "international"
	},
	{
		name: "Umaibo ( \u3046 \u307e \u3044 )",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		vegan: true,
		price: 3.43,
		img: "Images/umaibo.jpg",
		category: "international"
	},
	{
		name: "Shin Ramyun noodles ( \uc2e0 \ub77c \uba74 )",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 0.75,
		img: "Images/ramen.jpg",
		category: "international"
	},
	{
		name: "kimchi ( \uae40 \uce58 )",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		vegan: true,
		price: 12.89,
		img: "Images/kimchi.jpg",
		category: "international"
	},
	{
		name: "butter chicken sauce",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 2.89,
		img: "Images/butterchicken.jpg",
		category: "international"
	},
	{
		name: "tikka masala mix",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		vegan: false,
		price: 2.77,
		img: "Images/tikka.jpg",
		category: "international"
	},
	{
		name: "falafel",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		vegan: true,
		price: 3.39,
		img: "Images/falafel.jpg",
		category: "international"
	}
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