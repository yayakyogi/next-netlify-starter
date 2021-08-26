import { useState } from 'react'
import { useEffect } from 'react'

export default function Nav(){
    // 
    const [isOpen , setIsopen] = useState(false)
    const selectTheme = (value) => {
        localStorage.setItem('theme',value)
        const html = document.querySelector('html')
        html.classList.add(localStorage.getItem('theme'))
        if(value == 'dark')html.classList.remove('light')
        else html.classList.remove('dark')
    }
    useEffect(() => {
        document.querySelector('html').classList.add(localStorage.getItem('theme'))
    })
    return(
    <div className="bg-gradient-to-b from-indigo-800 to-indigo-700 dark:from-indigo-900 dark:to-indigo-800  mx-auto flex justify-between items-center shadow-lg w-full fixed  py-4 z-10 md:py-3">
        <div className="pl-2 md:pl-20" data-aos="fade-down">
            <div className="flex justify-between items-center">
                <img src="img/logo.png" className="w-6 h-6 md:w-8 md:h-8 mr-2"/>
                <a href="/" className="cursor-pointer font-black inline-block text-white text-lg md:text-2xl hover:text-gray-300 rounded-sm focus:outline-none">KuliKode</a>
                {/* Tombol toggle */}
                <div className="flex justify-start items-center ml-1 md:ml-4">
                    <svg className="h-4 w-4 md:h-5 md:w-5 text-gray-50 dark:text-gray-500 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                    <div className="bg-indigo-400 dark:bg-indigo-700 flex justify-between items-center rounded-full p-1">
                        <button type="button" onClick={() => selectTheme('light')} className="bg-white dark:bg-indigo-700 rounded-full h-3 w-3 md:h-4 md:w-4 focus:outline-none mr-2 "></button>
                        <button onClick={() => selectTheme('dark')} className="bg-indigo-400 dark:bg-white rounded-full h-3 w-3 md:h-4 md:w-4 focus:outline-none"></button>
                    </div>
                    <svg className="h-4 w-4 md:h-5 md:w-5 text-gray-500 dark:text-gray-50 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                </div>
            </div>
        </div>
        <ul className={`${isOpen ? 'block' : 'hidden'} absolute top-16 md:relative md:top-0 md:bg-transparent bg-indigo-700  w-full md:w-96 md:mr-16 md:flex md:pr-16 text-sm font-semibold`}>
            <li>
                <a href="#home" className="block px-4 py-3 md:py-2 text-white hover:text-gray-300 focus:bg-indigo-500 rounded-sm focus:ring-2 focus:ring-indigo-300">Home</a>
            </li>
    
            <li>
                <a href="#about" className="block px-4 py-3 md:py-2 text-white hover:text-gray-300 focus:bg-indigo-500 rounded-sm focus:ring-2 focus:ring-indigo-300">About</a>
            </li>
  
            <li>
                <a href="#portofolio" className="block px-4 py-3 md:py-2 text-white hover:text-gray-300 focus:bg-indigo-500 rounded-sm focus:ring-2 focus:ring-indigo-300">Portofolio</a>
            </li>
    
            <li>
                <a href="#service" className="block px-4 py-3 md:py-2 text-white hover:text-gray-300 focus:bg-indigo-500 rounded-sm focus:ring-2 focus:ring-indigo-300">Service</a>
            </li>
    
            <li>
                <a href="#contact" className="block px-4 py-3 md:py-2 text-white hover:text-gray-300 focus:bg-indigo-500 rounded-sm focus:ring-2 focus:ring-indigo-300">Contact</a>
            </li>
        </ul>
        <button id="humbergerbtn" onClick={() => setIsopen(!isOpen)} 
           className="md:hidden text-sm mr-4 px-2 py-1 font-bold border-gray-100 border-1 rounded-md cursor-pointer  focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className={`${!isOpen ? 'block' : 'hidden'} h-6 w-6 text-gray-100`}  viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className={`${isOpen ? 'block' : 'hidden'} h-6 w-6 text-gray-100`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
    </div>
    )
}