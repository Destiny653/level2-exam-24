'use client'
import React, { useContext } from 'react';
import './carousel.css'
import Image from 'next/image';
import { ImageContext } from '../../../../Context/Valuecontex';

export default function Carousel() {

  const {setImage} = useContext(ImageContext)

     const items = [
      {
        img: 'https://cdn.dribbble.com/uploads/47170/original/cd3266dde4f00a5d6a509c7375ddaecd.png?1685644840&format=webp&resize=273x340&vertical=center',
        title: 'Mandal Migan',
        description: 'Design Educator'
      },
      {
        img: 'https://cdn.dribbble.com/uploads/47178/original/mercedes-bazan.png?1689174566&format=webp&resize=273x340&vertical=center',
        title: 'Sanchoro Lopez',
        description: 'Design Educator'
      },
      {
        img: 'https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=273x340&vertical=center',
        title: 'Vantrophe Dachil',
        description: 'Design Educator'
      },
      {
        img: 'https://cdn.dribbble.com/uploads/47177/original/3986915be548424a5d36657f2b034ead.jpeg?1685645250&format=webp&resize=273x340&vertical=center',
        title: 'Prosper Marged',
        description: 'Design Educator'
      },
      {
        img: 'https://cdn.dribbble.com/uploads/47170/original/cd3266dde4f00a5d6a509c7375ddaecd.png?1685644840&format=webp&resize=273x340&vertical=center',
        title: 'Mercedes-Benz',
        description: 'Mercedes-Benz'
      },
      {
        img: 'https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=273x340&vertical=center',
        title: 'Michigan Stanley',
        description: 'Design Educator'
      },
      {
        img: 'https://cdn.dribbble.com/uploads/47170/original/cd3266dde4f00a5d6a509c7375ddaecd.png?1685644840&format=webp&resize=273x340&vertical=center',
        title: 'Vandel Marlin',
        description: 'Design Educator'
      },
     ]

  return (
    <>
      <div className='carousel-con'>
        {
          items.map((item) => (
            <div className='carousel-item bg-black rounded-3xl '><Image className='rounded-3xl' onClick={()=> setImage(item)} src={item.img} alt='image' width={300} height={300} /></div>
          ))
        }
      </div>
    </>
  )
}
