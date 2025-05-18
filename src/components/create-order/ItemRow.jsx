import Minus from "../svgs/Minus";
import Plus from "../svgs/Plus";

export default function ItemRow({ item, onAddItem, onRemoveItem, order }) {
  const isItemInOrder = order.totalItems.some((obj) => obj.id === item.id);
  return (
    <div className="bg-[#36393F] bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
      <div className="flex items-center">
        <div className="w-12 h-12   flex items-center justify-center mr-3">
          <img src={item.image} alt="Hamburger" className="w-10 h-10" />
        </div>
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-xs text-gray-400">{item.price}</p>
        </div>
      </div>
      <button
        onClick={isItemInOrder ? () => onRemoveItem(item) : () => onAddItem(item)}
        className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
        {isItemInOrder ? <Minus /> : <Plus />}
      </button>
    </div>
  );
}
