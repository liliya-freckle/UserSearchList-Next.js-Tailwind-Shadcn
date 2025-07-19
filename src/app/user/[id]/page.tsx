//slack

import { fetchUserById } from "@/api/users";
import { fetchUsers } from "@/api/users";
import Link from "next/link";
import { X } from "lucide-react";


export async function generateStaticParams(): Promise<
    { id: string }[]
        > {
    const users = await fetchUsers();
    return users.map((user) => ({ id: user.id.toString() }));
}

export default async function UserCardModal({
    params,
        }: {
    params: { id: string };
        }) {
    const user = await fetchUserById(params.id);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">

        <div className="relative px-6 pb-7 space-y-4 bg-white min-h-100 border rounded-xl">
            <Link
                href="/"
                className="absolute top-5 right-4 text-gray-500 hover:text-gray-800 transition animate-pulse"
                aria-label="Закрыть" 
                >
                <X className="w-6 h-6" />
            </Link>

            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Адрес:</strong> {user.address.street}, {user.address.city}</p>
            <p><strong>Телефон:</strong> {user.phone}</p>
            <p><strong>Вебсайт:</strong> {user.website}</p>
        <p><strong>Компания:</strong> {user.company.name}</p>
        
        </div>
        </div>
    );
}