import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function getServices(query) {
    const {filter, serviceId} = query;
    if (serviceId && serviceId.length !== 24) return null;
    if (serviceId) {
        const service = await dbConnect('services').findOne({_id: new ObjectId(serviceId)});
        return service;
    }
    if (filter) {
        const services = await dbConnect('services').find({category: filter}).toArray();
        return services;
    }

    const services = await dbConnect('services').find().toArray();
    return services;
    
}