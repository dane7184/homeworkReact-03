import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import PlaceholderCard from './PlaceholderCard';

export default function Products() {
    const [product, setProduct]= useState([{}])
    const [loader, setloader] =useState(false)

    useEffect(()=>{
        setloader(true)
        setTimeout(async() => {
            const response = await fetch("https://api.escuelajs.co/api/v1/products")
            const data = await response.json()
			setloader(false)
			setProduct(data)
        },4000)
    },[])

    return (


        <div className='d-flex flex-wrap container justify-content-center'>
        
        {!loader ? (
            product.map((p) => <ProductCard product={p} />)
        ) : [1,2,3,4,5,6,7,8].map(loader => 	<PlaceholderCard />)	}
    </div>
    );
}

