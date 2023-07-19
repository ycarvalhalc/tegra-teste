import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { UserProps } from "../../types/user"
import { 
  UserDetailHeader, 
  UserDetailInfos, 
  UserDetailCard, 
  UserDetailName, 
  UserDetailWrapper, 
  UserDetailCardLabel, 
  UserDetailCardText,
  UserDetailBackButton
} from "./UserDetail.styles";
import { ArrowLeft, UserCircle2 } from "lucide-react";
import { LoadingIcon } from "../../components/Loading/Loading.styles";


export default function UserDetail() {
  const { data: users, loading, error } = useFetch<UserProps[]>("https://jsonplaceholder.typicode.com/users")
  const { id } = useParams()
  const user = users?.find((user: UserProps) => user.id.toString() === id)
  const userAddress = user?.address
  const userCompany = user?.company

  if (error) return null

  return (
    <UserDetailWrapper>
      <UserDetailHeader>
        <UserDetailBackButton to="/">
          <ArrowLeft size="18" color="#FFF" />
          Voltar
        </UserDetailBackButton>
        { loading 
          ? <LoadingIcon color="#FFF" size="40" />
          : (
            <>
              <UserCircle2 size="65" strokeWidth="1" color="#FFF" />
              <UserDetailName>{user?.name}</UserDetailName>
            </>
          )
        }
      </UserDetailHeader>
      {users && 
        <UserDetailInfos>
          <UserDetailCard>
            <UserDetailCardLabel>Apelido:</UserDetailCardLabel>
            <UserDetailCardText>{user?.username}</UserDetailCardText>
          </UserDetailCard>

          <UserDetailCard>
            <UserDetailCardLabel>E-mail:</UserDetailCardLabel>
            <UserDetailCardText>{user?.email}</UserDetailCardText>
          </UserDetailCard>

          <UserDetailCard>
            <UserDetailCardLabel>Endereço:</UserDetailCardLabel>
            <UserDetailCardText>{`
              ${userAddress?.zipcode} -
              ${userAddress?.street},
              ${userAddress?.suite} - 
              ${userAddress?.city},
              ${userAddress?.geo.lat} (latitude),
              ${userAddress?.geo.lng} (longitude)
            `}</UserDetailCardText>
          </UserDetailCard>

          <UserDetailCard>
            <UserDetailCardLabel>Telefone:</UserDetailCardLabel>
            <UserDetailCardText>{user?.phone}</UserDetailCardText>
          </UserDetailCard>        

          <UserDetailCard>
            <UserDetailCardLabel>Website:</UserDetailCardLabel>
            <UserDetailCardText>{user?.website}</UserDetailCardText>
          </UserDetailCard>

          <UserDetailCard>
            <UserDetailCardLabel>Empresa:</UserDetailCardLabel>
            <UserDetailCardText>
              {`${userCompany?.name} - ${userCompany?.catchPhrase} - ${userCompany?.bs}`}
            </UserDetailCardText>
          </UserDetailCard>
        </UserDetailInfos>
      }
    </UserDetailWrapper>
  )
}