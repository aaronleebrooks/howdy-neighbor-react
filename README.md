<h1>Howdy Neighbor!</h1>
<p><a href="https://car-park-attendant-otter-53840.netlify.com/">Howdy Neighbor!</a> is a responsive full-stack app that connects at home DIY enthutiasts with proffessional craftsmen.</p>
<img src="public/images/howdy-neighbor-snapshots.png">

## Getting started
### Installing
```
>   git clone https://github.com/aaronleebrooks/howdy-neighbor-react.git
>   cd howdy-neighbor-react
>   npm install
```
### Launching
```
>   npm run start
```
Then [`localhost:8000`](http://localhost:8000) should open in a browser.
### Testing
```
>   npm run test
```

<h2>Introduction</h2>
<p>Howdy Neighbor is a forum-like application that allows at home DIY enthusiasts to connect with career proffessionals and figure out how to solve those 'Maybe we should call someone' questions.</p>

<h2>How it Works</h2>
<h3>Ask a Question</h3>
<p>Once you log into the app, you can easily post a question to the forum. If a craftsman responds, you will see the answer pop up in real time!</p>
<h3>Answer a Question</h3>
<p>Users can respond to questions on their individual pages, and help other users solve their home questions.</p>

<h2>Wireframes</h2>
<p>Initial wireframes were created for each page. Mockups of all key processes were designed with user flow in mind.</p>
<img src="public/images/howdy-neighbor-wireframe.png">

<h2>Technology</h2>
<h3>Front End</h3>
<ul>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>JavaScript</li>
  <li>React</li>
  <li>Redux</li>
  <li>Redux-Form</li>
  <li>Axios</li>
</ul>
<h3>Back End</h3>
<ul>
  <li>Node.js + Express.js (web server)</li>
  <li>MongoDB (database)</li>
  <li><a href="https://mochajs.org/">Mocha</a> + <a href="http://chaijs.com/">Chai</a> (testing)</li>
  <li>Continuous integration and deployment with <a href="https://travis-ci.org/">Travis CI</a></li>
</ul>
<h3>Responsive</h3>
<ul>
  <li>The app is fully responsive and quickly adapts to all mobile, tablet, and desktop viewports.</li>
</ul>
<h3>Security</h3>
<ul>
  <li>User passwords are encrypted using <a href="https://github.com/dcodeIO/bcrypt.js">bcrypt.js</a>.</li>
  <li><a href="http://passportjs.org/">Passport</a> is used to control endpoints from unauthorized users.</li>
</ul>
