import React, { useState } from 'react'
import { networks } from '../constants'

const Footer = () => {
  const [active, setActive] = useState('')

  return (
    <footer
      className="px-6 w-full flex justify-center items-center 
      py-5 mt-8 bg-primary"
    >
      <ul className="list-none flex flex-row gap-10">
        {networks.map((network, i) => (
          <li
            key={i}
            className={`${
              active === network
                ? "text-white"
                : "text-secondary"
            } hover:text-white text-[10px] sm:text-[18px] font-medium cursor-pointer
            `}
            onClick={() => setActive(network)}
          >
            <a onClick={() => window.open(network.link, "_blank")}>
              {network.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
