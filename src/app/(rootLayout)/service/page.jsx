import { getServices } from '@/actions/server/services';
import Filter from '@/components/buttons/ActiveFilter';
import ServiceCard from '@/components/serviceCard';
import React from 'react';

const Service = async ({searchParams}) => {
    const {filter} = await searchParams;
    const services = await getServices({filter});

    return (
        <div className="p-top global-px">
                <div className="flex items-center gap-4 flex-wrap">
                    <Filter to="" filter={filter}>All</Filter>
                    <Filter to="Baby Care" filter={filter}>Baby Care</Filter>
                    <Filter to="Elderly Care" filter={filter}>Elderly Care</Filter>
                    <Filter to="Sick People Care" filter={filter}>Sick People Care</Filter>
                </div>
            <h1 className='mt-6 text-3xl'>Total services found: <span className='text-(--primary-color)'>{services && services.length}</span></h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 my-10">
                {
                    services && services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;