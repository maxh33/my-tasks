import styled, { createGlobalStyle } from 'styled-components'
import { Button } from '../components/Task/styles'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Title = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`
export const Field = styled.input`
  border-radius: 8px;
  border-color: #666666;
  color: #666666;
  background-color: #fff;
  padding: 8px;
  font-weight: bold;
  width: 100%;
`
export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`

export default GlobalStyle
