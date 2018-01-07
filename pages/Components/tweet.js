import { Button,Menu,Container,Grid,Rail,Segment,Message,Image,Icon,Divider} from 'semantic-ui-react';
import moment from 'moment';
export default (props) => {
  var tweet = props.tweet;
  return(
    <Grid.Column>
      <Grid.Row style={{textAlign:'left',border:'1px solid #eee',borderRadius:'5px'}}>
        <div style={{backgroundColor:'#'+tweet.user.profile_link_color,borderRadius:'5px 5px 0px 0px',padding:'5px',paddingBottom:'15px'}}>
          <Image floated="left" circular src={tweet.user.profile_image_url}/>
          <a href={'https://twitter.com/'+tweet.user.screen_name} target="_blank" style={{color:'#fff',fontWeight:100}}><b>{tweet.user.name}<br/>@{tweet.user.screen_name}</b></a>
        </div>
        {(tweet.entities.urls.length>0)?
          <a href={tweet.entities.urls[0].url} target="_blank" style={{color:'#333',fontWeight:100}}>
            <p style={{padding:'10px'}}>{tweet.text}</p>
          </a>
          :<p style={{padding:'10px'}}>{tweet.text}</p>
        }
        <div style={{backgroundColor:'#eee',padding:'5px'}}>{moment(tweet.created_at, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').calendar()}</div>
      </Grid.Row>
    </Grid.Column>
  );
}