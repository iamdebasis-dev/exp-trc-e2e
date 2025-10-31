import { useNavigate } from "react-router-dom";
const Carts=({items = [], modifyQuantity, deleteCartItem})=>{
  
  
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 0;
  const discount = 0;
  const total = subtotal + delivery - discount;
  
    return(
    
        <>
  
        <table className="w-full border-collapse">
          
        <thead className="bg-indigo-100">
          <tr>
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Quantity</th>
            <th className="p-3 text-right">Remove</th>
          </tr>
        </thead>
          
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  Your cart is empty.
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr className="border-t" key={item.id}>
                  <td className="p-3">
                    <img
                      src={`/static/images/${item.image}`}
                      alt={item.title}
                      className="rounded-md w-20 h-25 object-cover"
                    />
                  </td>
  
                  <td className="p-3">
                    <p className="font-semibold text-gray-800">{item.title}</p>
                  </td>
  
                  <td className="p-3 font-bold text-purple-700">${item.price}</td>
  
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <button
                        className="bg-orange-500 text-white w-7 h-7 rounded-full"
                        onClick={() => modifyQuantity(item.id, -1)}
                      >
                        −
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        className="bg-orange-500 text-white w-7 h-7 rounded-full"
                        onClick={() => modifyQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
  
                  <td className="p-3 text-right">
                    <button
                      className="text-gray-600 hover:text-red-600 text-xl"
                      onClick={() => deleteCartItem(item.id)}
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          
        </table>
        <div className="bg-white p-6 py-8 rounded shadow">
        <div className="bg-white p-3">
          <h1 className="text-lg font-bold mb-6">
            Total Cart ({items.length.toString().padStart(2, "0")})
          </h1>
        </div>

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Delivery</span>
          <span>${delivery.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Discount</span>
          <span>-${discount.toFixed(2)}</span>
        </div>

        <hr className="my-2" />

        <div className="flex justify-between font-semibold text-lg mb-4">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <input
          type="text"
          placeholder="Coupon Code"
          className="border p-2 rounded w-full mb-2"
        />
        <button className="w-full bg-gray-800 text-white py-2 rounded mb-3 hover:bg-gray-900">
          Apply
        </button>

        <a href="/checkout">
          <button className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600">
            Checkout
          </button>
        </a>
        
      </div>
        
        
     
        </>    
    )
}
export default Carts