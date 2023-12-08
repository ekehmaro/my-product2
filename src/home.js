import { useState, useEffect} from 'react'




//components
import ProductListing from "./components/ProductListing"
import Navbar from './components/navBar';


const Home =()=>{
    
    const [products, setProducts] = useState();

    //get all products from json server 
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        'http://localhost:4000/products'
      );
      const data = await response.json();
      if(response.ok){
        setProducts(data)
      }
      else{
        console.log("something send wrong")
      }
      
    };
    
    getProducts();
  }, []);
 
  console.log(products)
  if(!products){
    return (
      <div className="app">
         Loading...
      </div>
      
    )
  }
  else{
    return(
      <div className="App">
        <Navbar />
        <ProductListing products = {products} />
      </div>
    )
  }
  ;
}


export default Home