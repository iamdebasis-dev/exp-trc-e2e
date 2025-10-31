import  { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import sampleExpenses from "./data";
import ProductCard from "./ProductCard";
import Carts from "./Carts";
import { BaggageClaim } from "lucide-react";
import Address from "./Address";


const App=()=>{
  const[product , setProduct]=useState(sampleExpenses);
  const [cart , setCart ] =useState ([]);

  

  const cartCount = cart.length;

  const handleAddToCart = (id) => {
    setProduct((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isItemInCart: !item.isItemInCart } : item
      )
    );
    setCart((itemCart)=>{
      const exists = itemCart.find((item)=>item.id === id);
      if(exists){
        return itemCart.filter((item) => item.id !== id);
      }else{
        const selectedItem = product.find((item) => item.id === id);
        return [...itemCart, { ...selectedItem, quantity: 1 }];
        
      }
    });
  };
  const modifyQuantity = (id, amount) => {
    setCart((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + amount) }
          : item
      )
    );
  };

 
  const deleteCartItem = (id) => {
    setCart((items) => items.filter((item) => item.id !== id));
    setProduct((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isItemInCart: false } : p))
    );
  };

  return(
    <>
    <Router>
    <div className="flex justify-between items-center p-4 bg-indigo-200 shadow-md">
        <h3 className="text-2xl text-gray-900 pl-6">
          Popular Delicious Foods
        </h3>

         <Link
          to="/cart"
          className="text-lg text-orange-800 font-semibold pr-6 hover:underline"
        ><BaggageClaim className="inline-block w-5 h-5" /> Cart ({cartCount})
          
        </Link>
      </div>

    <Routes>
        <Route
          path="/"
          element={<ProductCard record={product} onAddToCart={handleAddToCart} />}
        />
        <Route 
        path="/cart" 
        element={<Carts items={cart} modifyQuantity={modifyQuantity} deleteCartItem={deleteCartItem} />}
        
         />
         <Route path="/checkout" element={<Address />} />

      </Routes>
      </Router>

    </>
  )
}
export default App;