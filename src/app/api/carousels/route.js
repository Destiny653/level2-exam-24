import Carousel from "@/models/Carousel";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        // connect to database
        await connectDB();

        // find all the posts in the database
        const carousels = await Carousel.find()
        console.log(carousels);

        //return the posts as a json when successful
        return new NextResponse(JSON.stringify(carousels),{status: 200});  
    } catch (error) {
        console.log(error);

        // if there is an error, return a 500 status code
        return new NextResponse('Database Error',{status: 500});
    }
}

 