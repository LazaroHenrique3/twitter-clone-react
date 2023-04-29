//Styles
import {Container, 
        Header, 
        BackIcon, 
        ProfileInfo, 
        BottomMenu, 
        HomeIcon, 
        SearchIcon, 
        BellIcon, 
        EmailIcon} from './styles'

//Components
import ProfilePage from '../ProfilePage'

const Main = () => {
  return (
    <Container>
        <Header>
            <button>
                <BackIcon/>
            </button>

            <ProfileInfo>
                <strong>Lázaro Henrique</strong>
                <span>215 Tweets</span>
            </ProfileInfo>
        </Header>

        <ProfilePage/>

        <BottomMenu>
            <HomeIcon className='active'/>
            <SearchIcon/>
            <BellIcon/>
            <EmailIcon/>
        </BottomMenu>
    </Container>
  )
}

export default Main