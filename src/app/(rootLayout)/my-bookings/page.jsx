
import { getBookings } from "@/actions/server/bookings";
import Bookings from "@/components/bookings";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function MyBookings() {
  const session = await getServerSession(authOptions);

  if (!session?.user) redirect("/login?callback=/my-bookings");

  const bookings = await getBookings(session?.user?.email);

  return (
    <>
    {
      bookings.length === 0 && <h1>No Bookings found.</h1>
    }
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 global-px mx-auto mb-6 p-top">
      {
        bookings.length > 0 && bookings.map(item => <Bookings key={item._id} bookingData={JSON.stringify(item)}></Bookings>)
      }
    </div>
    </>
  );
}
