# HashTagMate

<img src="https://image.ibb.co/f5OUGb/Logomakr_2_K48_OH.png" width="200" alt="HashTagMate"/>

# Demo
[https://hashtagmate.herokuapp.com](https://hashtagmate.herokuapp.com)

# Preview
![Screen Shot 2022-10-27 at 00 11 47](https://user-images.githubusercontent.com/19430799/198148358-67aaca08-f57e-4599-a3b0-14b25f94db84.png)

## Accessibility

* You can access our frontend that consumes an Express API using ReactJS and NextJS at [HashTagMate](https://hashtagmate.herokuapp.com)

* You can follow HashTagMate twitter activities at [ImRwanda](https://twitter.com/ImRwanda) 


## About HashTagMate

**HashTagMate** is an app that is meant to sort tweets based on hashtags and has the ability to retweet them.

### Setup HashTagMate

Ensure you have [**Node**](https://nodejs.org/en/download/) and [**Git**](https://git-scm.com/downloads) installed.

```
git clone https://github.com/JeanAbayo/HashtagMate
cd HashtagMate
npm install
npm run dev
```

Use this url to create a Twitter app:
[https://apps.twitter.com/app/new](https://apps.twitter.com/app/new)

Replace the **::** in _config.js_ with _Consumer Key, Consumer Secret, Access Token, Access Token Secret_ Provided by and rename it to _config.js_

**Note:** You can use our config if needed. The app twitter account is just for this open source project ✌️. 

```
module.exports = {
	consumer_key: '::',
	consumer_secret: '::',
	access_token: '::',
	access_token_secret: '::'
}
```

Access the server at: `http://localhost:3000/`

## Endpoints

| Resource URL      | Methods | Description                                        | Requires Token |
| ----------------- | ------- | -------------------------------------------------- | -------------- |
| /hashtag | GET     | Pass a hashtag as a parameter to fetch it's tweets | TRUE           |
/hashtag/:hashtag | GET | Pass a hashtag as a parameter to fetch it's tweets(Through URL) | TRUE
