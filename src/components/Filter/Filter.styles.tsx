import { styled } from "styled-components";
import { XCircle } from "lucide-react";

export const FilterContainer = styled.div`
  width: 100%;
  background-color: #FFF;
  box-shadow: 0px 4px 4px #E1E1E1;
  height: 60px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 350px;
`

export const FilterLabel = styled.label`
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size 16px;
  margin-left: 15px;
`

export const FilterInput = styled.input`
  border-radius: 5px;
  border-width: 1px;
  height: 26px;
  padding: 5px;
  margin: 0 auto;
  width: 200px;
`

export const FilterClearButton = styled(XCircle)`
  margin-right: 15px;
  cursor: pointer;
`