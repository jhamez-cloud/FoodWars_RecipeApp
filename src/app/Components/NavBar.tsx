import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='w-full h-[60px] bg-[hsl(220,16%,96%)] flex px-16 justify-between items-center'>
      <figure className='w-1/4 h-full flex justify-start items-center'>
        {/* <img src="" alt="" /> */}
        <h1>FoodWars</h1>
      </figure>

      <ul className='w-2/3 h-full flex justify-evenly items-center'>
        <li>
            <Link href="/Home">Home</Link>
        </li>
        <li>
            <Link href="/Recipe">Food Recipe</Link>
        </li>
        <li>
            <Link href="/Cart">Cart</Link>
        </li>
      </ul>

      <form action="" className='w-1/3 h-full flex justify-center items-center'>
        <input type="text" placeholder='Search over 1,000 recipes'/>
      </form>
    </div>
  )
}

export default NavBar
