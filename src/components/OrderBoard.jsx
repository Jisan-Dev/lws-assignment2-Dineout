import { useState } from "react";
import CreateOrder from "./create-order/CreateOrder";
import OrderReports from "./order-summary/OrderReports";
import OrderSummary from "./order-summary/OrderSummary";

export default function OrderBoard() {
  const [allOrders, setAllOrders] = useState([]);

  const [allPendingOrders, setAllPendingOrders] = useState(
    allOrders.filter((order) => order.status == "pending")
  );

  const [allDeliveredOrders, setAllDeliveredOrders] = useState(
    allOrders.filter((order) => order.status == "delivered")
  );

  const handlePlaceOrder = (order) => {
    setAllOrders((prevOrders) => [
      ...prevOrders,
      {
        ...order,
        id: prevOrders.length + 1,
        status: "pending",
      },
    ]);

    setAllPendingOrders((prevOrders) => [
      ...prevOrders,
      {
        ...order,
        id: prevOrders.length + 1,
        status: "pending",
      },
    ]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <CreateOrder onPlaceOrder={handlePlaceOrder} />
      <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
        <OrderSummary
          allDeliveredOrders={allDeliveredOrders}
          allPendingOrders={allPendingOrders}
          allOrders={allOrders}
        />

        <OrderReports allOrders={allOrders} />
      </div>
    </div>
  );
}
