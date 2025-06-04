import { useState } from 'react'
import { IoIosClose } from "react-icons/io";
const ShopTagInput = ({shops, setShops }) => {
      const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      if (!shops.includes(input.trim())) {
        setShops([...shops, input.trim()]);
      }
      setInput("");
    }
  };

  const removeShop = (index) => {
    setShops(shops.filter((_, i) => i !== index));
  };

  return (
       <div className="border p-2 rounded bg-white">
      <label className="text-sm font-medium">Shops</label>
      <div className="flex flex-wrap gap-2 mt-1">
        {shops.map((shop, i) => (
          <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-mono text-sm flex items-center">
            {shop}
            <button
              onClick={() => removeShop(i)}
              className="ml-1 text-red-500 hover:text-red-700"
            >
              <IoIosClose size={20}/>
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type shop name and press Enter"
        className="mt-2 w-full p-1 border rounded bg-slate-50"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default ShopTagInput;
