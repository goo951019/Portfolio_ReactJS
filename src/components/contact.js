import React, {Component} from 'react';
import {Grid, Cell, Textfield} from 'react-mdl';
import Typist from 'react-typist';

class Contact extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      message: '',
      name: 'Portfolio_ReactJS',
      email: 'Portfolio_ReactJS@',
      mailSent: false,
      error: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(event) {this.setState({message: event.target.value})}

  handleSubmit (event) {
    if(this.handleValidation()){
      const templateId = 'template_4i46rWgm';
      this.sendMessage(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})
    }else{
      alert("Please fill out subject.")
    }
  }

  handleValidation (){
    let formIsValid = true;
    let msg = this.state.message;

    if(msg == ''){
      formIsValid = false;
    }
    return formIsValid;
  }

  sendMessage (templateId, variables) {
  window.emailjs.send(
    'gmail', templateId,
    variables
    ).then(res => {
      this.setState({mailSent: true})
      this.setState({error: false})
      console.log('Email successfully sent!')
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err => 
      {this.setState({error: true})
      console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)})
  }

  render(){
    const successMessage = 'Your message is sent. Thank you for contacting me!'
    const errorMessage = 'Failed to send message.'
    return(
      <div className="content">
        <Grid>
          <Cell style={{marginLeft: '60px',marginRight:'70px'}} col={8}>
            <div className="contact-box calm-font">
              <Typist cursor={{ show: false }} avgTypingDelay={140}>
                  <h2 className="fancy-font" style={{paddingLeft: '13px'}}>Contact</h2>
              </Typist>
              <hr className="hr-animation"/>
              <form>
                  <h3 className="fancy-font">Say Hello</h3>
                  <textarea
                    className="fancy-font"
                    id="message" name="message"
                    onChange={this.handleChange}
                    placeholder="Send me your contact info and short message, and I will get to you shortly. 😄"
                    value={this.state.message}
                    style={{fontSize: '15px', width: '100%', height: '280px', paddingTop: '10px', maxHeight: '280px'}}
                  />
                  <input type="button" value="Send Message" className="btn" onClick={this.handleSubmit} />
                <div>
                  {this.state.mailSent && <div className="sucsess fancy-font">{successMessage}</div>}
                  {this.state.error && <div className="error fancy-font">{errorMessage}</div>}
                </div>
              </form>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
