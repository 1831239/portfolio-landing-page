import React from 'react'
import axios from 'axios'
import './Experience2.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'

class Experience2 extends React.Component {


  // * constructor
  // *
  // * @object  @props  parent props
  // * @object  @state  component states

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

    axios.get('https://springboot-mysql-web-app.herokuapp.com/api/v1/experiencesapi', {
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
        <Section title="Experience">
        <Fade duration={1000}><div className="App">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <p>{item.title} in <a href={item.link} target="_blank" className="textLink">{item.experienceName}</a> from {item.dateFrom} to {/*(!item.dateTo == null) ? (present = "present") : (present = item.dateTo)}{present*/ item.dateTo}
                : {item.info} (
                {item.stack});</p>
                </li>
            ))}
          </ul>
        </div></Fade>
        </Section>
      );

  }

}

export default Experience2;