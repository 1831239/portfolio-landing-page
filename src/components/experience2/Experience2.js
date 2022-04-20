import React from 'react'
import axios from 'axios'
import './Experience2.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import iana_personality from '../../images/social/zelexio.PNG'
import iana_cvFR from '../../cvs/shapovalova-Iana-CV-Fr.pdf'
import iana_cvEn from '../../cvs/shapovalova-Iana-CV-En.pdf'

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
        <div className='ex2Sect'>
          <Section title="Experience">
            <Fade duration={1000}>
              <div className="App">
                <ul><img id="iana_personality" src={iana_personality}></img>
                  {items.map(item => (
                    <li key={item.id}>
                      <p>{item.title} in <a href={item.link} target="_blank" className="textLink">{item.experienceName}</a> from {item.dateFrom} to {/*(!item.dateTo == null) ? (present = "present") : (present = item.dateTo)}{present*/ item.dateTo}
                      : {item.info} (
                      {item.stack});</p>
                      </li>
                  ))}
                </ul>
                  <a className="textLink2" href={iana_cvFR} download>
                      Download CV in French
                  </a><br></br>
                  <a className="textLink2" href={iana_cvEn} download>
                      Download CV in English
                  </a>
              </div>
            </Fade>
          </Section>
        </div>
      );

  }

}

export default Experience2;