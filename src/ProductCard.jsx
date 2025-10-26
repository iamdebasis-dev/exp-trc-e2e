

const ProductCard = ({ record, onAddToCart }) => {
  return (
  <>
    <div className="grid grid-cols-4 gap-4 p-9">
      {record.map((item) => (
        <div key={item.id} className="flex flex-col bg-purple-300 rounded-lg shadow-md overflow-hidden" id={item.id}>
          <div className="bg-rose-200 rounded-xl shadow-md overflow-hidden">
                    <img src={`/images/${item.image}`} alt={item.title} class="w-100 h-70 object-cover"/>
                    <span className="absolute bottom-1 right-2 bg-orange-500 text-white text-sm px-2 py-0.5 rounded">{item.Name_item}</span>
                </div>
                <div className="p-3 mr-10">
                <div className="pl-90 flex justify-center "><span class="bg-orange-500 text-white text-lg px-2  py-1 rounded ">{item.tag}</span></div>
                    <h3 className="font-bold pl-32 text-lg">{item.title}</h3>
                </div>
                <div className="mt-1 text-sm flex items-right space-x-1 pl-38">
                    <span className="text-orange-600 font-bold text-base">${item.price}</span>
                    <span className="line-through text-gray-400 font-bold ">${item.discount_price}</span>
                </div>

          <div className="mt-3 flex items-right justify-between p-2">
            
              <button className={`text-white text-xl px-3 py-1  rounded-3xl ${item.isItemInCart ? "bg-red-500 hover:bg-red-600": "bg-orange-500 hover:bg-orange-600"}`}
              onClick={() => onAddToCart(item.id)}>{item.isItemInCart ? "Remove from Cart" : "Add to Cart"}</button>
              
            
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProductCard;
