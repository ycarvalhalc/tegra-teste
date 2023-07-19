import { UserCircle2 } from "lucide-react"
import { UserProps } from "../../types/user"

import { 
  CityUser, 
  EmailUser, 
  InfosUser, 
  ItemUser, 
  MoreDetailsLink, 
  NameUser
} from "./User.styles"

export default function UserItem( {user}: {user: UserProps}) {
  return (
    <ItemUser>
      <InfosUser>
        <UserCircle2 size="65" strokeWidth="1" color="#FFF" />
        <div>
          <NameUser>{user.name}</NameUser>
          <EmailUser>{user.email}</EmailUser>
          <CityUser>{user.address.city}</CityUser>
        </div>
      </InfosUser>
      <MoreDetailsLink to={`user/${user.id}`}>+ Detalhes</MoreDetailsLink>
    </ItemUser>
  )
}

