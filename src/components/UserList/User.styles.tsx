import { styled } from "styled-components"
import { Link } from "react-router-dom"

export const ListUser = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  & li {
    margin: 0;
    padding: 0;
    margin-bottom: 25px;
    width: 300px;
  }
`

export const ItemUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #E1E1E1;
  border-radius: 5px;
  box-shadow: 0px 6px 4px #E1E1E1;
`

export const InfosUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 10px;

  & svg {
    margin-right: 15px;
    border-radius: 100%;
    background-color: #1D88E5;
  }
`

export const NameUser = styled.h3`
  font-size: 18px;
  line-height: 18px;
  color: #73B9DB;
  margin-top: 0;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
`

export const EmailUser = styled.p`
  font-size: 14px;
  line-height: 14px;
  color: #A9A9A9;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
`

export const CityUser = styled.p`
  font-size: 14px;
  line-height: 14px;
  color: #C37172;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
`

export const MoreDetailsLink = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  background-color: rgba(52, 75,140, 1);
  padding: 5px 0px;
  border-radius: 5px;
  color: #FFF;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  letter-spacing:;
  transition: background-color ease-in-out .2s;

  &:hover {
    background-color: rgba(52, 75,140, .8);
  }
`