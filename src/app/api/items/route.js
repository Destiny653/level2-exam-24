import Item from "@/models/Item";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        // connect to database
        await connectDB();

        // find all the posts in the database
        const posts = await Item.find()
        console.log(posts);

        //return the posts as a json when successful
        return new NextResponse(JSON.stringify(posts),{status: 200});  
    } catch (error) {
        console.log(error);

        // if there is an error, return a 500 status code
        return new NextResponse('Database Error',{status: 500});
    }
}

 