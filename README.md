# DigiMart

* A ecommerce web application which fetches data from ``https://my-json-server.typicode.com/`` and represent all the products in a simple manner.
* We can perform functions in Digimart like
    1. **Add** new Product
    2. **Delete** Products
    3. **Update** the information about the product
    4. **Add** products to the cart
    5. **Remove** products from the cart

## Steps for setting up Digimart
1. Clone this repository using the following command:
```
gh repo clone sherawat-mohit/digimart
```

2. Install the required dependencies using the following command:
```
npm install
``` 

3. Start the application using the following command:
```
npm start
``` 

4. Open the application in your web browser by visiting the following URL:
```
http://localhost:3000
``` 

## Steps to use Digimart
1. User can **add** new products by click on the *Add Product* button present in the navigation link.
2. User can **edit** a products details using the *pencil icon* below the description of the product.
2. User can **delete** a products using the *dustbin icon* below the description of the product.
3. User can **add** products to the cart using the *Add to Cart* button below the description of the product.
4. User can **remove** product from the cart using the *Remove from Cart* button present in the cart tab or directly from the products page.

## Key Features
### Navbar:
* Show relevant navigation links.
#### All Products Page:
* Fetch and display a list of products from the API.
* Inline editing of each product by clicking on the *pencil* button.
* Individual product deletion with corresponding alerts/notifications.
#### Sorting Functionality:
* Implement a sort button to sort products by *price*.
#### Add to Cart:
* Add a button to add a product to the cart.
#### Create Page:
* Allow users to add new products to the database.
* Show alerts/notifications upon successfully adding a product.
#### Product Detail Page:
* Show all the details of a selected product.
* Provide a button to add the product to the cart.
#### Cart Page:
* Display all items in the cart.
#### Error and Success Handling:
* Handle errors and show appropriate alerts/notifications.
* Handle API response errors and display corresponding alerts/notifications.
#### React Router:
* Used React Router for navigation
* Utilize Redux for state management, providing a centralized store.
* Ensure Redux data persistence, maintaining cart items and other data after page refresh.


## Tech Stack
* React.js
* Redux
* Javascript
* CSS
* HTML

## About Me
* Name - Mohit Kumar
* Project name - Digimart