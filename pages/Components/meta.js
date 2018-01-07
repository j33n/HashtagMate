import Link from 'next/link';
import { Button,Menu,Container,Grid,Rail,Segment,Message,Image,Icon,Divider} from 'semantic-ui-react';
export default () => {
  return(
    <div>
      <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png"/>
      <link rel="manifest" href="/static/icons/manifest.json"/>
      <link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color="#6596a3"/>
      <link rel="shortcut icon" href="/static/icons/favicon.ico"/>
      <meta name="msapplication-config" content="/static/icons/browserconfig.xml"/>
      <meta name="theme-color" content="#ffffff"/>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
    </div>
  );
}