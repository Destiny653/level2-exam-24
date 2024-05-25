import mongoose ,{ Schema } from "mongoose";

const carouselSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    } 
},{timestamps:true});

export default mongoose.models.Carousel || mongoose.model('Carousel',  carouselSchema)