import { Skeleton } from "@/components/ui/skeleton"
import { fetchUsers } from "@/api/users";
import { Card } from "@/components/ui/card";


export default async function  Loading() {
  const users = await fetchUsers();
    return (
    <div className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <Card key={user.id} className="p-4 min-h-20 animate-pulse">
            <Skeleton className="text-lg font-bold"/>
            <Skeleton className="text-sm text-gray-600"/>
            <Skeleton className="text-sm text-gray-600"/>
            <Skeleton className="text-blue-500 underline mt-2 block animate-pulse "/>
          </Card>
        ))}
      </div>)
}

// <div className="text-lg text-gray-700 animate-pulse px-6 py-4 bg-white shadow-md">
//         <Skeleton/>
//         <p>Загрузка данных пользователей...</p>
//       </div>