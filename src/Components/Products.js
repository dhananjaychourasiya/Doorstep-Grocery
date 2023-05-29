import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Products=()=>{

    const [products, setProducts]= useState([
        {
            id:1,
            pname:'Apples',
            desc:'Red Juicy Apples',
            price:'Rs.50',
            shipping:'Rs.3',
            img:"https://www.freepnglogos.com/uploads/apple-png/apple-icon-paradise-fruits-iconset-artbees-0.png"
          },
          {
            id:2,
            pname:'Bananas',
            desc:'Sweetest Organic Bananas',
            price:'Rs.40',
            shipping:'Rs.10',
            img:"https://www.freepnglogos.com/uploads/banana-png/banana-maui-wowi-hawaiian-coffees-smoothies-23.png"
          },
          {
            id:3,
            pname:'Grapes',
            desc:'Jumbo Grapes',
            price:'Rs.30',
            shipping:'Rs.5',
            img:"https://www.freepnglogos.com/uploads/grapes-png/grapes-grape-red-transparent-png-stickpng-5.png"
          },
          {
            id:4,
            pname:'Oranges',
            desc:'Packed With Vitamin C',
            price:'Rs.32',
            shipping:'Rs.2',
            img: "https://www.freepnglogos.com/uploads/php-logo-png/php-logo-web-development-techies-institute-for-learning-13.png"
            // img:"https://www.freepnglogos.com/uploads/orange-png/fruit-orange-png-image-pixabay-22.png" 
          }
        ]);

    return(
        <div>
            <h2 className="mention">Click/Select Products below</h2>
            <ul>
                {
                    products.map((prod)=>{
                        return(
                            <li className="card">
                                <Link to={`/products/${prod.id}`} 
                                style={{textDecoration:'none'}}>
                                    <img src={prod.img}/>
                                    <div>
                                    <h3>{prod.pname}</h3>
                                    </div>
                                    </Link></li>
                        )
                    })
                }
            </ul>
            <Outlet context={products}/>
        </div>
    )
}

export default Products;