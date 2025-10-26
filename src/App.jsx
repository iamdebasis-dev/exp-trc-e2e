import  { useState } from "react";
import sampleExpenses from "./data";
import ProductCard from "./ProductCard";

const App=()=>{
  const[product , setProduct]=useState(sampleExpenses);

  const cartCount = product.filter((item) => item.isItemInCart).length;

  const handleAddToCart = (id) => {
    setProduct((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isItemInCart: !item.isItemInCart } : item
      )
    );
  };
  return(
    <>
    <div className="flex justify-between items-center p-4 bg-indigo-200 shadow-md">
        <h3 className="text-2xl text-gray-900 pl-6">
          Popular Delicious Foods
        </h3>

        <div className="text-lg text-orange-800 font-semibold pr-6">
          Cart ({cartCount})
        </div>
      </div>
    
    <ProductCard record = {product} onAddToCart={handleAddToCart}/>
    </>
  )
}
export default App;