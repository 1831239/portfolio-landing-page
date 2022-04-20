import React from 'react'
import axios from 'axios'
import './Trait.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import iana_personality from '../../images/social/iana_personality.jpg'

class Trait extends React.Component {


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

    axios.get('https://springboot-mysql-web-app.herokuapp.com/api/v1/traitsapi', {
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
        <div className="traitsSect">
        <Section title="Traits">
        <Fade duration={1000}><div className="App">
        <ul><img id="iana_personality" src={iana_personality}></img>
            {items.map(item => (
              <li key={item.id}>
                {item.traitText};
                </li>
            ))}

          </ul>

        </div></Fade>
        </Section></div>
      );

  }

}

export default Trait;