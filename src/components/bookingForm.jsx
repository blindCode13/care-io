"use client";

import { postBooking } from '@/actions/server/bookings';
import Loading from '@/app/loading';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const BookingForm = ({data}) => {
    const session = useSession();
    const service = JSON.parse(data);
    const [duration, setDuration] = useState(1);
    const [unit, setUnit] = useState(service.unit);
    const [isProcessing, setIsProcessing] = useState(false);
    let total;
    const router = useRouter();
    const pathname = usePathname();
    
    useEffect(() => {
        if (session.status === 'unauthenticated') {
            router.push(`/login?callback=${pathname}`);
        }
    }, [session.status, router, pathname]);

    if (isProcessing || session.status !== 'authenticated') return <Loading />

    if (service.unit === 'hour') {
        total = service.basePrice * duration;
    }

    if (service.unit === 'day') {
        total = service.basePrice * duration * (unit === 'day' ? 1 : (1/24));
    }

    total = total.toFixed(2);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const duration = e.target.duration.value;
        const address = e.target.address.value;
        
        const bookingData = {
            customerName: session.data.user?.name,
            customerEmail: session.data.user?.email,
            address,
            category: service.category,
            service: service.service,
            duration,
            unit,
            amount: total
        }

        try {
            setIsProcessing(true);
            const res = await postBooking(bookingData);

            if (res.acknowledged) {
                return toast.success("Booking has been confirmed.");
            }

            return toast.error("Failed to confirm the booking. Try again.");
        }
        catch (err) {
            toast.error(err.message);
        }
        finally {
            setIsProcessing(false);
            router.push("/")
        }
    }

    return (
        <section className="min-h-screen p-top">
      <div className="max-w-4xl mx-auto px-6">

        {/* Service Info */}
        <div className="mb-10">
          <p className="text-sm text-(--primary-color) font-medium mb-2">
            {service.category}
          </p>
          <h1 className="text-3xl font-bold text-gray-900">
            Book {service.service}
          </h1>
        </div>

        {/* Booking Form */}
        <form className="bg-white rounded-2xl shadow-sm p-8 space-y-8" onSubmit={handleSubmit}>

          {/* Booked By */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Customer Name
              </label>
              <input
                type="text"
                value={session.data.user?.name}
                disabled
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 text-gray-600 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Customer Email
              </label>
              <input
                type="email"
                value={session.data.user?.email}
                disabled
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 text-gray-600 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration
            </label>
            <div className="flex gap-4">
              <input
                type="number"
                min="1"
                defaultValue={duration}
                name='duration'
                required
                placeholder="Enter duration"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-(--primary-color)/40"
                onChange={(e) => setDuration(e.target.value)}
              />
              <select
                className="px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-(--primary-color)/40 cursor-pointer disabled:cursor-not-allowed"
                defaultValue={service.unit === 'hour' ? "hour" : "day" }
                onChange={(e) => setUnit(e.target.value)}
                disabled={service.unit !== 'day'}
              >
                <option value="hour">Hours</option>
                <option value="day">Days</option>
              </select>
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Address
            </label>
            <input
              type="text"
              placeholder="Enter full address"
              name='address'
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-(--primary-color)/40"
            />
          </div>

          {/* Total Cost */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col gap-6 text-center items-center justify-between sm:flex-row sm:text-start">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Cost</p>
              <p className="text-3xl font-bold text-(--primary-color)">
                ৳ {total} <span className="text-sm font-normal text-gray-500"></span>
              </p>
            </div>
            <div className="text-sm text-gray-500">
              <p className="text-gray-600 text-base mb-1">Base price: {service.basePrice} / {service.unit}</p>
              <p>Final cost will be calculated based on duration</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="btn-primary"
            >
              Confirm Booking
            </button>

            <Link
              href="/service"
              className="btn-secondery"
            >
              Back to Services
            </Link>
          </div>

        </form>
      </div>
    </section>
    );
};

export default BookingForm;