import { useEffect, useState } from "react"
import { UserProps } from "../../types/user"
import { 
  PaginationContainer, 
  PaginationControllerButton, 
  PaginationPagesButton, 
  PaginationPagesButtonContainer 
} from "./Pagination.styles"
import { ChevronRight, ChevronLeft } from "lucide-react"

type PaginationProps = {
  users: UserProps[] | [],
  setCurrentUsers: (users: UserProps[]) => void
}

export default function Pagination({ users, setCurrentUsers }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(5)

  const handleClickPreviousPage = () => {
    setCurrentPage(currentPage - 1)
    window.scrollTo({top: 0})
  }

  const handleClickNextPage = () => {
    setCurrentPage(currentPage + 1)
    window.scrollTo({top: 0})
  }

  const handleClickPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({top: 0})
  }

  let pages = []
  for(let count = 1; count <= Math.ceil(users?.length/usersPerPage); count++) {
    pages.push(count)
  }

  useEffect(() => {
    const lastUserIndex = currentPage * usersPerPage
    const firtsUserIndex = lastUserIndex - usersPerPage

    setCurrentUsers(users?.slice(firtsUserIndex, lastUserIndex))
  }, [users, currentPage])

  return (
    <PaginationContainer>
      <PaginationControllerButton 
        onClick={handleClickPreviousPage}
        disabled={currentPage == 1}
      >
        Anterior <ChevronLeft size={18} />
      </PaginationControllerButton>

      <PaginationPagesButtonContainer>
        {pages.map((page) => {
          return (
            <PaginationPagesButton 
              key={page} 
              onClick={() => handleClickPage(page)}
              disabled={currentPage == page}
            >{page}</PaginationPagesButton>
          )
        })}
      </PaginationPagesButtonContainer>

      <PaginationControllerButton 
        onClick={handleClickNextPage}
        disabled={currentPage == pages.length}
      >
        Próximo <ChevronRight size={18}/>
      </PaginationControllerButton>
    </PaginationContainer>
  )
}