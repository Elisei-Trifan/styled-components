import styled from 'styled-components'
import Title from './components/Title'
import Flex from './components/Flex'
import Console from './components/Console'
import Button from './components/Button'

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  padding: 2rem;
`

function App() {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title fontSize="32px" color="orange">
          Console cmd Trifan_Elisei
        </Title>
      </Flex>
      <Flex direction="column">
        <Console color="green" />
        <Button background="green" self="flex-end" prymary>
          Отправить
        </Button>
      </Flex>
    </AppWrapper>
  )
}

export default App
