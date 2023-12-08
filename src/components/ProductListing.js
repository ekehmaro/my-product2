import Products from "./Products"


const ProductListing = ({products}) =>{
    return(
        <>
            <div className="py-3 py-md-5 bg-light ">
                <div className="container">
                    <div className="">
                        <div className="row">
                            <h4 className="mb-4">My Products</h4>
                            <div className="d-flex flex-wrap justify-content-around">
                                {products.map(items=>{
                                    return(
                                        <div className="" key={items.id}>
                                            <Products items={items} />
                                        </div>
                                        
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}


export default ProductListing