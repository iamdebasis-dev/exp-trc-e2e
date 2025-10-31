import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Address=()=>{
    const navigate = useNavigate();
    const[formData , setFormData]= useState({
        fullName:"",
        phone:"",
        email:"",
        address:"",
        city:"",
        state:"",
        pinCode:"",
        country:"",
    });

    
    const handleChange =(e)=>{
        setFormData({
            ...formData,[e.target.name]:e.target.value,
        });
    };
    const handleSubmit=(e)=>{
        e.preventDufault();
        console.log("Address Submitted:", formData);
        alert("Address saved succesfully!");
        navigate("/success")

    };
    return(
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Shipping Address</h2>
  
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full border p-2 rounded"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full border p-2 rounded"
            />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" type="email" required  className="w-full border p-2 rounded"/>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Street Address"
              rows="2"
              required
              className="w-full border p-2 rounded"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
                className="border p-2 rounded"
              />
              <input
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                required
                className="border p-2 rounded"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="Postal Code"
                required
                className="border p-2 rounded"
              />
              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                required
                className="border p-2 rounded"
              />
            </div>
  
            <button 
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600"
            >
              Save & Continue
            </button>
            <button
                onClick={() => navigate("/cart")}
                className="w-full bg-gray-700 text-white py-2 rounded mt-3 hover:bg-gray-800">
                    ← Back to Cart
            </button>
          </form>
        </div>
      </div>
    )
}
export default Address