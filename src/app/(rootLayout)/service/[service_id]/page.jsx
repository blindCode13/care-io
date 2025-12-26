import Link from "next/link";
import { getServices } from "@/actions/server/services";
import { notFound } from "next/navigation";

export default async function ServiceDetailsPage({ params }) {
  const {service_id} = await params;

  const service = await getServices({serviceId: service_id});
  if (!service) return notFound();


  return (
    <>
        {
            service && 
            <section className="min-h-screen p-top">
      <div className="max-w-3xl mx-auto px-6">

        {/* Main Card */}
        <div className="bg-white rounded-2xl border-2 border-(--primary-color)/30 p-10">

          {/* Category */}
          <p className="text-sm text-(--primary-color) font-medium mb-3">
            {service.category}
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {service.service}
          </h1>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed max-w-3xl mb-10">
            {service.description}
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">

            <div className="border border-gray-200 rounded-xl p-6">
              <p className="text-sm text-gray-500 mb-1">Category</p>
              <p className="text-lg font-semibold text-gray-900">
                {service.category}
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <p className="text-sm text-gray-500 mb-1">Pricing</p>
              <p className="text-lg font-semibold text-gray-900">
                ৳{service.basePrice} / {service.unit}
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="flex flex-col items-center sm:flex-row gap-4">
            <Link
              href={`/booking/${service_id}`}
              className="btn-primary"
            >
              Book This Service
            </Link>

            <Link
              href="/service"
              className="btn-secondery"
            >
              Back to Services
            </Link>
          </div>

        </div>
      </div>
    </section>
        }
    </>
  );
}
