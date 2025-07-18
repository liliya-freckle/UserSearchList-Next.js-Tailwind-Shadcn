"use client";

import Link from "next/link";

export default function Error() {
    return ( <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">

      <p className="text-gray-600 text-center max-w-md">
        Произошла ошибка при загрузке данных.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg shadow transition duration-300"
      >
        Вернуться на главную
      </Link>
    </div>
  )}
