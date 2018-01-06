# HashTagMate

<img src="https://image.ibb.co/f5OUGb/Logomakr_2_K48_OH.png" width="200" alt="HashTagMate"/>

## About HashTagMate

**HashTagMate** is an app that is meant to sort tweets based on hashtags and has the ability to retweet them.

### Setup HashTagMate
Ensure you have [**Node**](https://nodejs.org/en/download/) and [**Git**](https://git-scm.com/downloads) installed.

```
git clone https://github.com/JeanAbayo/HashtagMate
cd HashtagMate
npm install
npm start

```

Use this url to create a Twitter app:
[https://apps.twitter.com/app/new](https://apps.twitter.com/app/new)

Replace the **::** in *config.example.js* with *Consumer Key, Consumer Secret, Access Token, Access Token Secret* Provided by twitter and rename it to *config.js*

```
module.exports = {
	consumer_key: '::',
	consumer_secret: '::',
	access_token: '::',
	access_token_secret: '::'
} 
```