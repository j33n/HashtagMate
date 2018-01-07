import { Button,Menu,Container,Grid,Rail,Segment,Message,Image,Icon,Divider} from 'semantic-ui-react';
export default () => {
  return(
    <Container>
      <Divider/>
      <Grid columns={1} padded textAlign="center">
        <Grid.Column verticalAlign='middle'>
          <b>
            <i style={{fontWeight:100}}>
              HashtagMate (From Weekend Hackathon Series)
            </i>
            <br/>
            <i>Kigali <Icon name="heart" as='i' color='red'/> Codes</i>
          </b>
        </Grid.Column>
      </Grid>
    </Container>
  );
}