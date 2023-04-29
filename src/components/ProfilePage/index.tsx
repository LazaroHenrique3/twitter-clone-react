//Styles
import {Container, 
        Banner, 
        Avatar, 
        ProfileData, 
        LocationIcon, 
        CakeIcon,
        EditButton,
        Followage} from './styles'

//Components
import Feed from '../Feed'

const ProfilePage = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Lázaro Henrique</h1>
        <h2>@lazaro_f</h2>

        <p>
          Developer at <a href="">@linkedin</a>
        </p>

        <ul>
          <li>
            <LocationIcon/>
            Paraná, Brasil
          </li>
          <li>
            <CakeIcon/>
            Nascido(a) em 05 de desembro de 2001
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>150</strong>
          </span>
          <span>
            <strong>563 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed/>
    </Container>
  )
}

export default ProfilePage