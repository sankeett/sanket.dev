import React from 'react'

const Contact = () => {
  return (
    <section id='Contact' className='h-[15vh] bg-[#1b242f] text-white flex flex-col justify-center items-center'>

        <div>
            <ul className='flex flex-row gap-8 justify-center underline'>
                <li className='hover:text-[#00ffff] cursor-pointer'><a href="https://www.linkedin.com/in/sanket-golekar-600578217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</a></li>
                <li className='hover:text-[#00ffff] cursor-pointer'><a href="https://x.com/sanketreacts?s=21">X.com</a></li>
                <li className='hover:text-[#00ffff] cursor-pointer'><a href="https://github.com/sankeett">Github</a></li>
                <li className='hover:text-[#00ffff] cursor-pointer'><a href="https://www.instagram.com/sanket.1817?igsh=MTVweGpqZmlyMTJncQ%3D%3D&utm_source=qr">Instagram</a></li>    
            </ul>
        </div>
        <div className='mt-4'>
            <p>SANKET GOLEKAR © 2025</p>
        </div>
    </section>
  )
}

export default Contact
