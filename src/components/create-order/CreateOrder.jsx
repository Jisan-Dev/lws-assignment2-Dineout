import { useState } from "react";
import chicken from "../../assets/chicken.svg";
import hamburger from "../../assets/hamburger.svg";
import pizza from "../../assets/pizza.svg";
import submarine from "../../assets/submarine.svg";
import ItemRow from "./ItemRow";

const items = [
  {
    id: 1,
    name: "Hamburger",
    price: 300,
    image: hamburger,
  },
  {
    id: 2,
    name: "Chicken Nuggets",
    price: 300,
    image: chicken,
  },
  {
    id: 3,
    name: "Submarine Sandwich",
    price: 300,
    image: submarine,
  },
  {
    id: 4,
    name: "Pizza slices",
    price: 300,
    image: pizza,
  },
];

export default function CreateOrder({ onPlaceOrder }) {
  const defaultOrderState = {
    customerName: "",
    totalPrice: 0,
    totalItems: 0,
  };

  const [order, setOrder] = useState(defaultOrderState);

  const handleAddItem = (item) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      totalItems: prevOrder.totalItems + 1,
      totalPrice: prevOrder.totalPrice + item.price,
    }));
  };

  const handleRemoveItem = (item) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      totalItems: prevOrder.totalItems - 1,
      totalPrice: prevOrder.totalPrice - item.price,
    }));
  };

  return (
    // <!-- Create Order Section -->
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of their requirements.
      </p>

      {/* <!-- Customer Name Input --> */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          value={order.customerName}
          onChange={(e) => setOrder({ ...order, customerName: e.target.value })}
          className="w-full bg-[#36393F] bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 border border-[#4d525e] "
        />
      </div>

      {/* <!-- Choose Items --> */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {/* <!-- Items --> */}
          {items.map((item) => (
            <ItemRow
              key={item.id}
              item={item}
              onAddItem={handleAddItem}
              onRemoveItem={handleRemoveItem}
            />
          ))}
        </div>
      </div>

      {/* <!-- Place Order Button --> */}
      <button
        onClick={() => {
          onPlaceOrder(order);
          setOrder(defaultOrderState);
        }}
        disabled={order.totalItems === 0}
        className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
        Place Order (BDT {order.totalPrice})
      </button>
    </div>
  );
}
