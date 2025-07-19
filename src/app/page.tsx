import Image from "next/image";
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import { fetchUsers } from "@/api/users";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import SearchUserList from "@/components/UserSearch";

export default async function HomePage() {
  const users = await fetchUsers();

  return (
    <div>
      <Header/>

      <SearchUserList users={users}/>


      {/* <div className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <Card key={user.id} className="p-4">
            <h2 className="text-lg font-bold">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.company.name}</p>
            <Link href={`/user/${user.id}`} className="text-blue-500 underline mt-2 block animate-pulse">
            Подробнее
            </Link>
          </Card>
        ))}
      </div> */}
      <Footer/>
    </div>
  )};