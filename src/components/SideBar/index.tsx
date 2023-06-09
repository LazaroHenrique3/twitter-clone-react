import StickyBox from 'react-sticky-box'

//Styles
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles'

//Components
import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'

const SideBar = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Luiz Batanero" nickname="@luizbatanero" />,
              <FollowSuggestion name="Luke Morales" nickname="@lukemorales" />,
              <FollowSuggestion name="Camila Magalhães" nickname="@camilamagalhaes" />
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  )
}

export default SideBar