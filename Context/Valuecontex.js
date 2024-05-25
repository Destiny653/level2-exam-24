"use client"
import { createContext, useState } from 'react';


export const ImageContext = createContext()

export const ImageProvider = ({ children }) => {

    const [image, setImage] = useState()
     

    return (
        <ImageContext.Provider value={{setImage, image}}>
        
                {children}
            
        </ImageContext.Provider>
    )
}