import React, { useEffect, useState } from 'react'

const ProductList = ({category}: {category: string}) => {
  const [products, setProducts] = useState<string[]>([]);
  
  useEffect(() => {
    console.log('fetching produtcs in ', category);
    setProducts(['Clothing', 'Household']);
  }, [category]);

  return (
    <div>
      Productlist
    </div>
  )
}

export default ProductList