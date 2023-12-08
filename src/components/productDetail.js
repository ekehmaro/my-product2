 import { useLocation } from "react-router-dom";
 import "./navBar.css"


 const ProductDetail = () =>{
    const location = useLocation()
    const {items} =  location.state
     return(
         <div>
             <div className="navbar bg-dark mr-5">
                {items.title} description
             </div>
             
             <div className="py-3 py-md-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mt-3">
                            <div className="bg-white border">
                                <img src={items.thumbnail} className="w-100" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-7 mt-3">
                            <div className="product-view">
                                <h4 className="product-name">
                                    {items.title}
                                    <br/>
                                    <label className="label-stock bg-success">In Stock</label>
                                </h4>
                                <h4 className="product-name">
                                    Category: {items.category}
                                </h4>
                                <hr/>
                                
                                <div>
                                    <span className="selling-price">Price: ${items.price}</span>
                                    <br/>
                                    <span className="original-price">Discount: {items.discountPercentage}%</span>
                                </div>
                                
                                
                                <div className="mt-3">
                                    <h5 className="mb-0">Small Description</h5>
                                    <p>
                                        {items.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <div className="">
                                <div className="c bg-white">
                                    <h4>Description</h4>
                                </div>
                                <div className="">
                                    <p>
                                    {items.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
     )
 }


 export default ProductDetail;