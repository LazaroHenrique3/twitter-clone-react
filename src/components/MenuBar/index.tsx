//Styles
import { 
     Container,
     Topside,
     Logo,
     MenuButton,
     HomeIcon,
     BellIcon,
     EmailIcon,
     FavoriteIcon,
     ProfileIcon,
     Botside, 
     Avatar, 
     ProfileData,
     ExitIcon
} from './styles'

//Components
import Button from '../Button'

const MenuBar = () => {
  return (
    <Container>
        <Topside>
            <Logo/>

            <MenuButton>
                <HomeIcon/>
                <span>Página Inicial</span>
            </MenuButton>

            <MenuButton>
                <BellIcon/>
                <span>Notificações</span>
            </MenuButton>

            <MenuButton>
                <EmailIcon/>
                <span>Mensagens</span>
            </MenuButton>

            <MenuButton>
                <FavoriteIcon/>
                <span>Favoritados</span>
            </MenuButton>

            <MenuButton className="active">
                <ProfileIcon/>
                <span>Perfil</span>
            </MenuButton>

            <Button>
                <span>Tweetar</span>
            </Button> 
        </Topside>

        <Botside>
            <Avatar/>

            <ProfileData>
                <strong>Lázaro Henrique</strong>
                <span>@lazaro_f</span>
            </ProfileData>
            <ExitIcon/>
        </Botside>
    </Container>
  )
}

export default MenuBar