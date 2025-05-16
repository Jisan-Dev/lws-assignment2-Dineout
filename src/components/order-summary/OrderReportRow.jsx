export default function OrderReportRow({ order }) {
  return (
    <tr className="border-t border-gray-700">
      <td className="py-3">{order.id}</td>
      <td className="py-3"> {order.customerName} </td>
      <td className="py-3">{order.totalItems} </td>
      <td className="py-3">{order.totalPrice}</td>
      <td className="py-3">
        <span className={`text-${order.status == "pending" ? "red" : "green"}-500`}>
          {order.status.toUpperCase()}
        </span>
      </td>
      <td className="py-3">
        <button className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
          Delete
        </button>
        <button className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
          DELIVER
        </button>
      </td>
    </tr>
  );
}
