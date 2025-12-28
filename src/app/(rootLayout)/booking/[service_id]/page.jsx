
import { getServices } from "@/actions/server/services";
import BookingForm from "@/components/bookingForm";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { service_id } = params;

  const service = await getServices({ serviceId: service_id });
  if (!service) {
    return {
      title: "Booking Not Found",
      description: "The requested booking page does not exist.",
    };
  }

  return {
    title: `Book ${service.service}`,
    description: `Book ${service.service} online. Price: ৳${service.basePrice} per ${service.unit}.`,
  };
}


export default async function BookingPage({ params }) {
  const {service_id} = await params;
  
  const service = await getServices({serviceId: service_id});
  if (!service) return notFound();

  return (
    <>
        {
            service && <BookingForm data={JSON.stringify(service)} key={service._id}></BookingForm>
        }
    </>
  );
}
