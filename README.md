# Tamagotchi

Using the revealing module pattern to create a simple Tamagotchi imitation. Use of animation for movement and decreasing bars in the UI helped the animal come to life.

# Getting started

The main repo can be found [here](https://github.com/ShinyVerse/Tamagotchi)

click on the
```
fork
```
button at the top-right of the page and select your account. Select
```
clone
```
from your own page and use (for SSH)
```
git clone git@github.com:YOUR-USERNAME/Tamagotchi.git
```
or
```
git clone https://github.com/YOUR-USERNAME/Tamagotchi.git
```
for HTTPS

# Prerequisites

Download Node.js and npm.
Visit [here](https://www.npmjs.com/get-npm) to find out more.

```
npm install http-server
```

## For tests
Visit [webdriver.io](http://webdriver.io/) and download. Follow their getting started [guide](http://webdriver.io/guide.html) if new.

# Install

Have [Firefox](https://www.mozilla.org/en-GB/firefox/new/) downloaded and available. The Selenium server will use this to run your UI tests.

On your command line enter
```
npm install
```
Open the index.html file in your browser, if you see a little animal on your screen then you're good to go.
Open by command line:
```
open index.html
```

# Running the tests
It is useful to setup an alias in your bash_profile for most of these commands

To get the server running:

cd REPLACE-WITH-WHERE-YOU-SAVED-SELENIUM && java -jar -Dwebdriver.gecko.driver=geckodriver selenium-server-standalone-3.5.3.jar

Success will have a message starting with:
```
10:09:19.070 INFO - Launching a standalone Selenium Server
```

Open a new window on your terminal by pressing command + t

Enter http-server

On succeed you should see this message:
```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://IP:8080
Hit CTRL-C to stop the server

```
Then to run the UI tests enter:

```
./node_modules/.bin/wdio wdio.conf.js
```
Upon success you should see Firefox open, see the Tamagotchi and have the tests complete.

# Run unit tests

Enter into the command line:
```
npm test
```


# Authors
Laura Jackson

# License
This project is licensed under the MIT License