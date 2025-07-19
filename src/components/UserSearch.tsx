"use client";

import { useState, useMemo, useEffect, ChangeEvent } from "react";
import { useDebounce } from "use-debounce";
import { motion } from "framer-motion";
import { User } from "@/types/users";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";


interface SearchUserListProps {
  users: User[];
}

export default function SearchUserList({ users }: SearchUserListProps) {
  const [inputSearch, setInputSearch] = useState<string>("");
  const [inputValue] = useDebounce(inputSearch, 300);


  const filteredUsers = useMemo(() => {
    const letters = inputValue.trim().toLowerCase();
    if (!users) return [];
    if (letters.length < 2) return users;
    return users.filter((u) => u.name?.toLowerCase().includes(letters));
  }, [users, inputValue]);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };

  return (
    <>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <Input
          placeholder="Введите имя пользователя для поиска..."
          value={inputSearch}
          onChange={handleSearchInputChange}
          className="mb-6 mx-7 max-w-md px-6"
        />

        {inputSearch.trim().length >= 2 && filteredUsers.length === 0 && (
          <p className="col-span-full text-center text-muted-foreground mb-3">
            По запросу «{inputSearch}» ничего не найдено.
          </p>
        )}
      </motion.div>
    </>
  );
}