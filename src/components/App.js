import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="navbar-container">
          <div className="navbar-desktop">
            <ul>
              <li>
                <a>RSN</a>
              </li>
              <li>
                <a href="#whoami">Who am I</a>
              </li>
              <li>
                <a href="#languages">Languages</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#findme">Find Me</a>
              </li>
            </ul>
          </div>
          <div className="navbar-mobile">
            <p>RSN</p>
            <div className="humburger-icon">
              <div className="humburger-icon-line" />
              <div className="humburger-icon-line" />
              <div className="humburger-icon-line" />
            </div>
          </div>
        </div>
        <div id="introduction" className="introduction-container">
          <h3>Hello guys</h3>
          <h1>My name is Ridoan Saleh Nasution</h1>
          <h2>I'm a Software Frontend Developer</h2>
          <p>
            I live in Jakarta. Currently, i work as a Frontend Developer in Tokopedia. My job are
            build, maintain and refactor fintech products for Indonesia's society to enable them
            grows their own business, economy, purchase their favorite product (even they don't have
            money right now) etc.
          </p>
        </div>
        <div id="whoami" className="whoami-container">
          <h1>Who am I ?</h1>
          <p>
            Hi, i am <b>Ridoan</b> (nickname), a Frontend Developer, who loves to learn new
            technologies and experiment things in Web Development. I usually build web apps using
            React.Js since it has powerful feature and very extensible with other library we choose.
          </p>
          <p>
            I was study Informatic Management at{' '}
            <a href="https://telkomuniversity.ac.id/id/" target="_blank">
              Telkom University
            </a>{' '}
            in Bandung Indonesia. I graduated in August 2016 and got my first job 3 months later.
            The company's name was <b>OPRENT</b>. Oprent is an online fashion rental based in
            London. But, the tech team was located in Jakarta. I work as a Frontend Developer which
            use Angular.Js (v1.x) as frontend framework.
          </p>
        </div>
        <div id="languages" className="languages-container">
          <h1>Languages</h1>
          <p>
            I have been work for almost 3 years now as a Frontend Developer. These are few
            technologies that i have work with:
          </p>
          <div>
            <ul>
              <li>JavaScript (ES6, ES7 etc)</li>
              <li>HTML5 & CSS3</li>
              <li>React.Js</li>
              <li>Redux</li>
              <li>GraphQL</li>
              <li>Node.Js</li>
              <li>Express</li>
              <li>Angular.Js (v1.x)</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
        <div id="work" className="work-container">
          <h1>Work</h1>
          <ul>
            <li>
              <p>
                Frontend Developer at{' '}
                <a href="https://wwww.tokopedia.com" target="_blank">
                  Tokopedia
                </a>
              </p>
              <p>
                <ul>
                  <li>Build Fintech products</li>
                  <li>Maintain and refactor old products</li>
                  <li>Implement best practices</li>
                  <li>Code Review</li>
                  <li>Sharing Knowledges</li>
                  <li>Learn new technologies</li>
                </ul>
              </p>
            </li>
            <li>Frontend Developer at OPRENT</li>
            <p>
              <ul>
                <li>Maintain and refactor an online fashion rental</li>
                <li>Build new feature</li>
                <li>Sharing Knowledges</li>
                <li>Learn new technologies</li>
              </ul>
            </p>
          </ul>
          <p>
            While develop web apps, there are certain tools that i really like such as VS Code,
            Tmux, Zsh, Github, etc.
          </p>
        </div>
        <div id="findme" className="findme-container">
          <h1>Find Me</h1>
          <p>
            Finally, in this open world you can find / look or say 'hi' to me at these links below.
            Come on! I would love to hear something from you.
          </p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/ridoan-saleh-n-32897385/" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://medium.com/@ridoansalehnst" target="_blank">
                Medium
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Rido67720624" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://github.com/ridoansaleh" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/4501402/ridoansaleh?tab=profile"
                target="_blank"
              >
                Stackoverflow
              </a>
            </li>
          </ul>
          <div className="findme-creator">
            <p>Built by Ridoan Saleh Nasution</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
