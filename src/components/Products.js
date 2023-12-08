import {Link} from "react-router-dom";






const Products = ({items}) =>{
    return(
        <>
            <div className=" ">
                <div className="product-card">
                    <div className="product-card-img">
                        <label className="stock bg-success">In Stock</label>
                        <img src={items.thumbnail} alt=""/>
                    </div>
                    <div className="product-card-body">
                        <p className="product-brand">{items.brand}</p>
                        <h5 className="product-name">
                            <Link to={'/productDetail'} state={{items}}>
                                {items.title} 
                            </Link>
                        </h5>
                        <div>
                            <span className="selling-price">${items.price}</span><br/>
                            <span className="original-price">{items.discountPercentage}% off</span>
                        </div>
                        <div className="mt-2">
                            <Link to={'/productUpdate'} state={{items}} className="btn btn1"> 
                                edit 
                            </Link>
                            <Link  className="btn btn1" to={'/productDetail'} state={{items}}>
                                view 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;