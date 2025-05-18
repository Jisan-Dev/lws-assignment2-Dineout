import { useState } from "react";
import Filter from "../svgs/Filter";
import OrderReportRow from "./OrderReportRow";

export default function OrderReports({ allOrders, onDeliverOrder, onDeleteOrder }) {
  const [sortOption, setSortOption] = useState("all");

  let sortedOrders;

  if (sortOption == "all") {
    sortedOrders = allOrders;
  } else {
    sortedOrders = allOrders.filter((order) => order.status == sortOption);
  }

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>

        <div className="flex gap-4 items-center">
          <Filter />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="rounded-sm">
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>
      <div className="bg-cardbg rounded-lg p-4">
        <div className="reports-container">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Customer Name</th>
                <th className="pb-3 font-medium">Items</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {sortedOrders
                .slice()
                .reverse()
                .map((order) => (
                  <OrderReportRow
                    key={order.id}
                    order={order}
                    onDeliverOrder={onDeliverOrder}
                    onDeleteOrder={onDeleteOrder}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
