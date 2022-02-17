import React, { useRef } from 'react'
import axios from 'axios'
import './Skills.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'


//const url = 'https://springboot-mysql-web-app.herokuapp.com/api/v1/skillsapi'

//const fetcher = (...args) => fetch(...args).then((res) => res.json())

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
        <Section title="Skills">
        <Fade duration={1000}><div className="About">
          <table><tbody>
            {items.map(item => (
              <tr><td className="left" key={item.id}>
                {item.skillName}:</td><td className="right">{item.amount}/100
                </td></tr>
            ))}
          </tbody></table>
        </div></Fade></Section>
      );

  }

}

export default Skills;