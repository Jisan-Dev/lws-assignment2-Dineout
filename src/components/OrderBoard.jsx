import CreateOrder from "./create-order/CreateOrder";

export default function OrderBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <CreateOrder />
      <div className="md:col-span-2 h-[calc(100vh_-_130px)]"> </div>
    </div>
  );
}
