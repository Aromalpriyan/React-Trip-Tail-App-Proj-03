import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className=" dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex justify-between h-16 mx-auto bg-gray-700">
		<h1 className="font-work flex items-center p-2 text-xl text-yellow-400">Trip Tail</h1>
			
		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white font-semibold">Home</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="text-red-600 font-bold flex items-center px-4 -mb-1 ">Blog</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  dark:text-violet-600">Destinations</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white font-semibold">Categories</a>
			</li>
            <li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white font-semibold">Gallery</a>
			</li>
            <li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white font-semibold">About</a>
			</li>
            <li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white font-semibold">Contact</a>
			</li>
		</ul>
		<button className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>

    </div>
  )
}

export default Navbar