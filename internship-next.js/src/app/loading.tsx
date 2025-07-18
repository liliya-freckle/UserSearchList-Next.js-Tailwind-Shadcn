import { Loader2 } from "lucide-react"

export default function Loading() {
    return (
    <div>
      <div className="text-lg text-gray-700 animate-pulse px-6 py-4 bg-white shadow-md">
        <Loader2 className="w-5 h-5 animate-spin text-blue-600 px-6" />
        <p>Загрузка данных пользователей...</p>
      </div>
    </div>)
}