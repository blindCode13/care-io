
import { getServices } from "@/actions/server/services";
import BookingForm from "@/components/bookingForm";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

// Mock logged-in user (replace with session later)


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
