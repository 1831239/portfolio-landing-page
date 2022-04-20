import React from 'react'
import axios from 'axios'
import './Blog.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import iana_blog from '../../images/social/discussion-two-people.jpg'

class Blog extends React.Component {


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

    axios.get('https://springboot-mysql-web-app.herokuapp.com/api/v1/blogsapi', {
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
        <div className='blogSect'>
          <Section title="Blog"> 
            <Fade duration={1000}>
              <div className="App">
                <ul><img id="iana_blog" src={iana_blog}></img>
                  {items.map(item => (
                    <li key={item.id}>
                      <h3>{item.title}</h3>
                      <h4>{item.datePublished}, {item.author}</h4> 
                      <p>{item.blogContent}</p>
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

export default Blog;