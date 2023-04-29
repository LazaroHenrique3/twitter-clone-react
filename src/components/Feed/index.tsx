//Styles
import {Container, Tab, Tweets} from './styles'

//Components
import Tweet from '../Tweet'

const Feed = () => {
  return (
    <Container>
        <Tab>Tweets</Tab>

        <Tweets>
           <Tweet/>
           <Tweet/>
           <Tweet/>
           <Tweet/>
           <Tweet/>
        </Tweets>
    </Container>
  )
}

export default Feed