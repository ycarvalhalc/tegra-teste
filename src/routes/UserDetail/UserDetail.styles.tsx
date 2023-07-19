import { styled } from "styled-components";
import { Link } from "react-router-dom"

export const UserDetailWrapper = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const UserDetailHeader = styled.div`
  background-color: #344B8C;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
`

export const UserDetailBackButton = styled(Link)`
  position: absolute;
  left: 5px;
  top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #FFF;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
`

export const UserDetailName = styled.h1`
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 0;
  margin-top: 5px;
`

export const UserDetailInfos = styled.div`
  margin-top: -30px;
  width: 300px;
  z-index: 2;
`

export const UserDetailCard = styled.div`
  width: 100%;
  background-color: #FFF;
  border-radius: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 6px 4px #E1E1E1;
  padding: 5px 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const UserDetailCardLabel = styled.div`
  text-align: center;
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  color: #2587E9;
  margin-bottom: 10px;
`

export const UserDetailCardText = styled.div`
  text-align: center;
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  color: #000;
  margin: 0;
`