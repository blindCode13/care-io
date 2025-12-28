
export default function Bookings({ bookingData }) {
  const data = JSON.parse(bookingData);
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Service name */}
      <h3 className="text-lg font-semibold text-gray-900">
        {data.service}
      </h3>

      {/* Meta info */}
      <div className="mt-4 text-sm text-gray-600">
        <div className="flex justify-between border-2 border-x-0 border-t-0 border-b-gray-300 items-center py-2">
          <span>Duration</span>
          <span className="font-medium text-gray-900">
            {data.duration} {data.unit}
          </span>
        </div>

        <div className="flex justify-between border-2 border-x-0 border-t-0 border-b-gray-300 items-center py-2">
          <span>Status</span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold capitalize
              ${
                data.status === "pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
          >
            {data.status}
          </span>
        </div>

        <div className="flex justify-between border-2 border-x-0 border-t-0 border-b-gray-300 items-center py-2">
          <span>Total Paid</span>
          <span className="font-medium text-gray-900">
            ৳ {data.amount}
          </span>
        </div>

        <div className="flex justify-between border-2 border-x-0 border-t-0 border-b-gray-300 items-center py-2">
          <span>Bought at</span>
          <span className="font-medium text-gray-900">
            {new Date(data.paymentTime).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
