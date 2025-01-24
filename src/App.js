import styled from 'styled-components'
import Title from './components/Title'

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  padding: 2rem;
`

function App() {
  return (
    <AppWrapper>
      <Title color={'blue'}>ksdbis</Title>
    </AppWrapper>
  )
}

export default App
