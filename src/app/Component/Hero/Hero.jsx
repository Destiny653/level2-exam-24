'use client'
import React, { useState, useEffect } from 'react'
import Carousel from '../Carousel/Carousel'
import './hero.css'
import Image from 'next/image'

export default function Hero() {

  const [data, setData] = useState([])

  async function getProduct() {
    const res = await fetch('api/carousels');

    if (!res.ok) {
      throw new Error('faild to fetch data')
    }
    setData(await res.json())
  }

  useEffect(() => {
    getProduct()
  }, [])

  console.log(data)

  const items = [
    {
      img:'https://cdn.dribbble.com/userupload/14554814/file/original-99b884484b0d36b68fa91d232f055da4.jpg?crop=336x277-2378x1809&resize=450x338&vertical=center',
    },
    {
      img:'https://cdn.dribbble.com/userupload/14631503/file/original-26f3b33f5c9d64a95340f63d83138280.jpg?resize=450x338&vertical=center',
    },
    {
      img:'https://cdn.dribbble.com/userupload/14637690/file/original-132633caf691c4848cc91ff33e671884.png?resize=450x338&vertical=center',
    },
    {
      img: 'https://cdn.dribbble.com/userupload/14645444/file/original-2357bbb961bc57c8f844a5def7d606ca.png?crop=0x0-6000x4500&resize=450x338&vertical=center',
    },
    {
      img: 'https://cdn.dribbble.com/userupload/14575850/file/original-6a9299d241930586a0ed7688091ef9c5.jpg?resize=450x338&vertical=center',
    },
    {
      img: 'https://cdn.dribbble.com/userupload/14737039/file/original-f395c72718d0fd71cae7f0120da1662c.png?resize=450x338&vertical=center',
    },
    {
      img: 'https://cdn.dribbble.com/userupload/14713090/file/original-2d2cce602c0027559014ba7ed1564bc7.jpg?resize=450x338&vertical=center',
    },
    {
      img: 'https://cdn.dribbble.com/userupload/14677457/file/original-112c633a99247d313a11ff70cc06cb45.jpg?crop=61x316-1136x1123&resize=450x338&vertical=center',
    },
    {
      img: 'https://cdn.dribbble.com/userupload/14615254/file/original-05265d6a4bf568fabb0498d36fd68fa9.jpg?resize=450x338&vertical=center',
    },
    {
      img: 'https://cdn.dribbble.com/userupload/14703100/file/original-121a1ebcfb59ad1dc0922ad2bce92607.jpg?crop=68x51-1532x1149&resize=450x338&vertical=center',
    },
    {
      img: 'https://cdn.dribbble.com/userupload/14693888/file/original-8c04710243cb32604377eef3be128afa.jpg?resize=450x338&vertical=center',
    },
    {
      img: 'https://cdn.dribbble.com/userupload/14699556/file/original-d1b809469abf7bba06ea66ac0cd2e634.png?resize=450x338&vertical=center',
    },
    {
      img: 'https://cdn.dribbble.com/userupload/14693888/file/original-8c04710243cb32604377eef3be128afa.jpg?resize=450x338&vertical=center',
    },
    {
      img: 'https://cdn.dribbble.com/userupload/14676077/file/original-4087c2e2085bcc0327b534615a0ec3c0.jpg?resize=450x338&vertical=center',
    },
    {
      img: 'https://cdn.dribbble.com/userupload/14680970/file/original-2a8d1357488f134d679a075f8518646e.png?resize=450x338&vertical=center',
    },
    {
      img: 'https://cdn.dribbble.com/userupload/14716867/file/original-65525d1b9bd1a6b40e3689e88d92de97.jpg?crop=0x0-2000x1500&resize=450x338&vertical=center',
    },
    {
      img: 'https://cdn.dribbble.com/userupload/14157665/file/original-ec6e66dff0c68d23ff920e2f3b3272ea.png?resize=450x338&vertical=center'
    },
    {
      img: 'https://cdn.dribbble.com/userupload/14555364/file/original-f060fbd04a1b8234e9ef907c4df12fe6.jpg?resize=450x338&vertical=center'
    }
  ]

  return (
    <>
      <main className='flex flex-col justify-center items-center gap-4 mt-36'>
        <h1 className='text-center p-2 bg-amber-300 w-fit rounded-3xl '>Over 3 million ready-to-work creatives!</h1>
        <p className='text text-7xl text-center'>The worlds destination <br /> for design</p>
        <p className='text-2xl '>Get inspired by the work of top-rated designers and agencies around the world.</p>
        <button className='btn btn-primary btn-lg btn-block py-3 px-4 rounded-3xl bg-slate-950 text-white '>Get Started</button>
        <Carousel />
        <div>
          <h1 className='text-5xl text-center pb-7'>Explore inspiring designs</h1>
          <div>
            <div className='hero-img'>
              {
                items.map((item, index) => {
                  return (
                    <div key={index}>
                      <Image src={item.img} alt='img' />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
