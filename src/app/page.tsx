
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import { fetchUsers } from "@/api/users";
import SearchUserList from "@/components/UserSearch";

export default async function HomePage() {
  const users = await fetchUsers();

  return (
    <div>
      <Header/>

      <SearchUserList users={users}/>

      <Footer/>
    </div>
  )};