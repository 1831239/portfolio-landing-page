import React from 'react'
import axios from 'axios'
import './Skills.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'

function printMe(skill_amount) {

    {let line=" ";
    for(let i = 0; i < skill_amount; i++){
        line+=". ";
    }
    return line;
    }
}

function printMeRest(skill_amount) {
    {let line=" ";
        for(let i = 0; i < 105; i++){
            line+=". ";
        }
        return line;
    }
}

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
        <div className='skillsSect'>
          <Section title="Technologies">
            <Fade duration={1000}>
              <div className="App">
                <ul id="bigList">
                  {items.map(item => (
                      <li className="tech_nameContainer" id={item.skillName} key={item.id}>
                          <span className="tech_nameToend">{printMeRest(item.amount)}</span>
                          <span className="tech_name">{printMe(item.amount)+item.amount+"/100"}</span>
                          <span className="tech_name">{item.skillName}</span>

                      </li>

                  ))}

                </ul>
                  <ul id="smallList">
                      {items.map(item => (
                          <li className="tech_nameContainer" id={item.skillName} key={item.id}>
                              <span className="tech_name">{item.skillName+": "+item.amount+"/100"}</span>

                          </li>

                      ))}

                  </ul>
              </div>
            </Fade>
          </Section>
        </div>
      );

  }

}

export default Skills;

