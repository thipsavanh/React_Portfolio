import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Hero from '../components/Hero';
import Content from '../components/Content';
import resume from '../assets/images/Resume.pdf';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
      disabled: true
    });

  }

  render() {
    return (
      <div>
        <Hero title={this.props.title} />
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control id="name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
            </Form.Group>

            <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
              Send
            </Button>
           
            <div className="col-6 col-lg-4 ml-auto"> More Info About Me:
                    <div className="contact-links">
                        <a href="https://github.com/thipsavanh">GitHub Page</a><br />
                        <a href="https://www.linkedin.com/in/thipsavanh-douangboupha-a386b6191/">LinkedIn</a><br /> 
                        <a href={resume}>Click to view resume</a><br />
                        <span>Email Address: thipsavanh@gmail.com</span><br />
                    </div>            
            </div>
          </Form>
        </Content>
      </div>
    );
  }

}


export default Contact;