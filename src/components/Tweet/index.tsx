//Styles
import {
    Container, 
    Retweeted, 
    RocketseatIcon, 
    Body, 
    Avatar, 
    Content, 
    Header, 
    Dot,
    Description, 
    ImageContent, 
    Icons, 
    Status, 
    CommentIcon, 
    RetweetIcon, 
    LikeIcon
} from './styles'

const Tweet = () => {
  return (
    <Container>
        <Retweeted>
            <RocketseatIcon/>
            você retweetou
        </Retweeted>

        <Body>
            <Avatar/>

            <Content>
                <Header>
                    <strong>Rocketseat</strong>
                    <span>@rocketseat</span>
                    <Dot/>
                    <div className="time">27 de jun</div>
                </Header>

                <Description>
                    Foguete não tem ré! 🚀 
                </Description>

                <ImageContent/>

                <Icons>
                    <Status>
                        <CommentIcon/>
                        18
                    </Status>

                    <Status>
                        <RetweetIcon/>
                        18
                    </Status>

                    <Status>
                        <LikeIcon/>
                        999
                    </Status>
                </Icons>
            </Content>
        </Body>
    </Container>
  )
}

export default Tweet