import { styled } from "styled-components"

export const PaginationContainer = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PaginationControllerButton = styled.button`
  margin: 0;
  background-color:rgba(115,161,219,1);
  padding: 5px 10px;
  border-radius: 5px;
  border-width: 1px;
  cursor: pointer;
  color: #FFF;
  border: 1px solid #A9A9A9;
  transition: background-color ease-in-out .2s;
  font-size: 0;

  &:hover {
    background-color: rgba(115,161,219,.8);
  }

  &:disabled {
    background-color: #A9A9A9;
    cursor: not-allowed;
    opacity: .5;
  }
`

export const PaginationPagesButtonContainer = styled.div`
  margin: 0 auto;
  border: 0;
`

export const PaginationPagesButton = styled(PaginationControllerButton)`
  margin: 0 8px;
  font-size: 16px;
`