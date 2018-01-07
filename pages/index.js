import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import {
  Button,
  Menu,
  Container,
  Grid,
  Rail,
  Segment,
  Message,
  Image,
  Icon,
  Divider
} from "semantic-ui-react";
import uuid from "uuid/v4";
import { Footer, Header, Tweet, Meta } from "./Components";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { activeItem } = this.state;
    return (
      <Container textAlign="center">
        <div>
          <Head>
            <title>HashtagMate - I mess with tweets of a specific tag</title>
            <Meta />
          </Head>
          <Header />
          <Container>
            <Grid columns={3}>
              {this.props.tweets.map(tweet => {
                return <Tweet key={uuid()} tweet={tweet} />;
              })}
            </Grid>
          </Container>
          <Footer />
        </div>
      </Container>
    );
  }
}
App.getInitialProps = async function() {
  const res = await fetch("https://hashtagmate.herokuapp.com/hashtag/Rwot");
  const tweets = await res.json();
  return {
    tweets: tweets
  };
};
