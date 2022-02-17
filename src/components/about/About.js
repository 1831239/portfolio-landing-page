import React from 'react'
import axios from 'axios'
import './About.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'

class About extends React.Component {


  // * constructor
  // *
  // * @object  @props  parent props
  // * @object  @state  component state

  constructor(props) {

      super(props);

      this.state = {
          items: [],
          isLoaded: false
      }

  }


  // * componentDidMount
  // *
  // * Fetch json array of objects from given url and update state.

  componentDidMount() {

    axios.get('https://springboot-mysql-web-app.herokuapp.com/api/v1/projectsapi', {
      headers: {
        "Content-Type": "application/json",
      },
    })
          .then(res => {
              this.setState({
                  items: res.data,
                  isLoaded: true, 
              })
          }).catch((err) => {
              console.log(err);
          });

  }


  // * render
  // *
   //* Render UI
   
  render() {

      const { isLoaded, items } = this.state;

      if (!isLoaded)
          return <div>Loading...</div>;

      return (
        <Section title="Projects">
        <Fade duration={1000}><div className="App">
          <h1>My Projects</h1>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <p><a href={item.link} target="_blank" className="textLink">{item.title}</a>
                : {item.description} (
                {item.stack});</p>
                </li>
            ))}
          </ul>
        </div></Fade>
        </Section>
      );

  }

}

export default About;