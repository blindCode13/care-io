
import Link from "next/link";

const ServiceCard = ({ service }) => {
  const { category, service: serviceName, basePrice, unit } = service;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
      
      {/* Category */}
      <p className="text-sm text-gray-500 mb-2">
        {category}
      </p>

      {/* Service Name */}
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        {serviceName}
      </h3>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold text-gray-900">
          ৳{basePrice}
          <span className="text-sm font-normal text-gray-500"> / {unit}</span>
        </p>

        <Link
          href={`/services`}
          className="btn-primary"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
