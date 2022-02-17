import React from 'react'
import axios from 'axios'
import './Skills.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'

class Skills extends React.Component {


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

    axios.get('https://springboot-mysql-web-app.herokuapp.com/api/v1/skillsapi', {
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
        // eslint-disable-next-line react/style-prop-object
        <Section title="Technologies" style="background:black">
        <Fade duration={1000}><div className="App">
          <ul>
            {items.map(item => (
              <div width={item.amount}>
                <li className="tech_name" id={item.skillName} key={item.id}>
                  {item.skillName}: {item.amount}/100;
                </li>
              </div>
            ))}
          </ul>
        </div></Fade>
        </Section>
      );

  }

}

export default Skills;

