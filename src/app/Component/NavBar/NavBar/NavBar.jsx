import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { FaSearch } from "react-icons/fa";

export default function NavBar() {
    return (
        <>
            <header>
                <nav className='flex justify-between items-center gap-10 w-full box-border px-9 py-5'>
                    <section className='flex justify-center items-center gap-20'>
                        <div>
                            <Image className='w-20 ' src='https://th.bing.com/th?id=OIP.DnA2F5Zi-zrlCdlMN64emwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' alt='logo' width={300} height={300} />
                        </div>
                        <ul className='flex items-baseline gap-5'>
                            <Link href='/'>
                                <li>Find Designers</li>
                            </Link>
                            <li>Inspiration</li>
                            <li>Jobs</li>
                            <li>Go Pro</li>
                        </ul>
                    </section>
                    <ul className='flex items-center gap-5'>
                        <li className='relative'>
                            <input type="text" name="text" className=' w-56 bg-slate-100 py-2 rounded-3xl' />
                            <FaSearch className='inline absolute right-3 top-3 text-zinc-500' />
                        </li>
                        <Link href='/login'>
                            <li><button>Log in</button></li>
                        </Link>
                        <li className='px-4 py-2 text-white bg-black rounded-3xl '>Sign up</li>
                    </ul>
                </nav>
            </header>

        </>
    )
}
