import Link from 'next/link';
import { Button,Menu,Container,Grid,Rail,Segment,Message,Image,Icon,Divider} from 'semantic-ui-react';
export default () => {
  return(
    <div style={{marginBottom:'15px'}}>
      <Container>
        <Grid columns={3} padded>
          <Grid.Column>
            <Image size="small" floated="left" circular src={'/static/images/logo.png'}/>
          </Grid.Column>
          <Grid.Column verticalAlign='middle' columns={6}>
            <h1 style={{fontWeight:100}}>
              HashtagMate<br/>
              <small>I mess with tweets of a specific tag</small>
            </h1>
          </Grid.Column>
        </Grid>
      </Container>
      <Menu>
        <Link href={{ pathname: '/hashtag', query: { name: 'Rwot' } }}>
          <Menu.Item name = 'Rwot'>
            #Rwot
          </Menu.Item>
        </Link>
        <Link href={{ pathname: '/hashtag', query: { name: 'Rwot' } }}>
          <Menu.Item name = 'Rwot'>
            #ThousandHills
          </Menu.Item>
        </Link>
      </Menu>
    </div>
  );
}