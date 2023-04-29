//Styles
import { Container, Wrapper } from "./styles"

//Components
import MenuBar from '../MenuBar'
import Main from '../Main'
import SideBar from '../SideBar'

const Layout = () => {
  return (
    <Container>
        <Wrapper>
            <MenuBar/>
            <Main/>
            <SideBar/>
        </Wrapper>
    </Container>
  )
}

export default Layout