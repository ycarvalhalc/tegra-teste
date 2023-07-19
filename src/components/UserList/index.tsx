import { useState } from "react"
import { UserProps } from "../../types/user"

import Filter from "../Filter"
import Pagination from "../Pagination"
import UserItem from "./UserItem"

import { ListUser } from "./User.styles"

export default function UserList({ users }: {users: UserProps[] | null}) {
  const [currentUsers, setCurrentUsers] = useState<UserProps[]>([])
  const [filteredUsers, setFilteredUsers] = useState<UserProps[]>([])

  return (
    <> 
      <Filter currentUsers={currentUsers as UserProps[]} setFilteredUsers={setFilteredUsers}/>
      <ListUser>
        {filteredUsers?.map((user: UserProps) => (
          <li key={user.id}>
            <UserItem user={user} />
          </li>
        ))}
      </ListUser>
      <Pagination users={users as UserProps[]} setCurrentUsers={setCurrentUsers}/>
    </>
  )
}

