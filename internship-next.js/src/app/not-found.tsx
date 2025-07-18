
'use client'

import React from 'react'
import Link from 'next/link';

const NotFound = () => {
  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4 animate-bounce">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Страница не найдена
      </h2>
      <p className="text-gray-600 text-center max-w-md">
        Извините, но запрашиваемая страница не существует или была перемещена.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg shadow transition duration-300"
      >
        Вернуться на главную
      </Link>
    </div>
    
  )
}

export default NotFound