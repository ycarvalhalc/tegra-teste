import { useFetch } from "../../hooks/useFetch"
import { UserProps } from "../../types/user"

import UserList from "../../components/UserList"
import { LoadingIcon } from "../../components/Loading/Loading.styles"

export default function Users() {
  const { data: users, loading, error } = useFetch<UserProps[]>("https://jsonplaceholder.typicode.com/users")
  
  if (error) return null

  return (
    <>
      {loading && <LoadingIcon />}
      {users && <UserList users={users as UserProps[]}/>}
    </>
  )
}