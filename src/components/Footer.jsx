import React from 'react'
import {BsFacebook, BsGithub, BsTwitter, BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
    <div className='mt-[100%] h-60 bg-gray-900'>
        <footer className="text-white">

            {/* Icons */}
            <div className="flex gap-10">
            <BsFacebook/>
            <BsGithub/>
            <BsTwitter/>
            <BsLinkedin/>

            </div>
        </footer>
    </div>
  )
}

export default Footer