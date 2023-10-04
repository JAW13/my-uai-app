import React from "react";



function Footer(){
    return(
      <footer class="w-full bg-gray-300 p-8">
    <div class="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-gray-300 text-center md:justify-between">
    <a href="https://www.google.com/" className="flex items-center gap-1">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90">
             <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
             </svg>
        <span className="font-bold text-xl">Rubloque</span>
      </a>
      <ul class="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <a
            href="https://www.google.com/"
            class="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com/"
            class="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
          >
            License
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com/"
            class="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
          >
            Contribute
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com/"
            class="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
    <hr class="my-8 border-blue-gray-50" />
    <p class="block text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
      © 2023 Material Tailwind
    </p>
  </footer>
    );
  }

  export default Footer;