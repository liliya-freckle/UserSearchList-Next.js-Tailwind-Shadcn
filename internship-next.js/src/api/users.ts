import { User } from "@/types/users";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export async function fetchUsers(): Promise<User[]> {
    const res = await fetch (`${BASE_URL}/users`);

    if(!res.ok) {
        throw new Error("Error");
    }
    return res.json();
}


export async function fetchUserById(id: string): Promise<User> {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  if (!res.ok) {
    throw new Error(`Error fetching user with id ${id}`);
  }
  return res.json();
}
