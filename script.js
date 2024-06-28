document.addEventListener('DOMContentLoaded', function() {
  const apiURL='https://course-api.com/react-store-products';
  //data
  const loadingElement= document.getElementById('loading')
  const errorElement=document.getElementById('error');
  const productContainer=document.getElementById('product-container');
  const productImage=document.getElementById('width', 600);
  const imageSrc= document.src=document.getElementById("myImg").src="apiURL"
  const productName= document.getElementById('product-name');
  const productDescription=document.getElementById('product-description');
  const productPrice=document.getElementById('product-price')
  const previousButton=document.getElementById('previous')
  const nextbutton=document.getElementById('next')
  //product display 
  
  let currentIndex= 0;
  let products=[];

// async function loading and error messages

async function asyncCall(product){
  try{
        
  const  request= await fetch (apiURL);
   if (!request.ok) throw new Error('Network did not respond')  
  
    products= await request.json();
 if (products.length=0)  throw new Error ('Products not found');
 
 displayProduct(currentIndex); 
}  catch(error) {
console.error('Error loading products');
loadingElement.style.display='none';
errorElement.style.display=('Error processing products, reload page')

// hide loading indicators, error elements, and product container
loadingElement.style.displayProduct='block'
 errorElement.style.display='none';

 //Previous Button
 prevButton.addEventListener('click', () =>{
  currentIndex (currentIndex-1) % productlength;
   displayProduct(currentIndex);
  });
  //Next Button
  nextButton.addEventListener('click', () =>{
   currentIndex(currentIndex+1)% products.length;
   displayProduct(currentIndex);
  });
 
 


}})





