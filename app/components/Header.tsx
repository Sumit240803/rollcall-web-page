import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 md:px-16 py-6 border border-b-gray-300 border-t-0 border-x-0">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">

        {/* LOGO — always visible */}
        <Image src="/logo.png" width={48} height={48} alt="Logo" />

        {/* TEXT (hidden on small screens) */}
        <div className="hidden md:block font-metropolis text-xl cursor-pointer">
          Rollcall
        </div>
      </div>

      {/* RIGHT SIDE ICON (hidden on small screens) */}
      <div className="hidden md:block">
        <Image src="/insta.png" width={32} height={32} alt="Instagram" />
      </div>

    </div>
  )
}

export default Header
