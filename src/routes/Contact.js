import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import LoadingGlobalOpacity from '../components/globalLoading';
import './Contact.css';

function Contacts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const testing = (e) => {
    e.preventDefault();
    setSending(true);
    if (name.length < 3) {
      alert('Your name is too short');
      setSending(false);
    } else if (!email.includes('@')) {
      alert('Invaild Email');
      setSending(false);
    } else {
      emailjs.init('user_CclXiddborFfKKHf3hbMH');
      var templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      emailjs.send('outlook', 'template_h9cp3qX3', templateParams).then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email has sent');
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setSending(false);
          console.log(name);
        },
        function (error) {
          console.log('FAILED...', error);
          alert(' Fail to send email');
          setSending(false);
        }
      );
    }
  };
  return (
    <div className='contact' id='contact'>
      {/* <div className='contact_text_container'>
        <h1 className='contact_text_heading'>
          If Not Now, When? Let’s Work Together!
        </h1>
        <p className='content'>
          My javascript skills up to date till ES6 such as promise and
          async/sync function. I also up to on latest trend of web trend. I am
          comfortable with technology like redux or make an HTTP request with
          REST API.
        </p>
      </div> */}
      <div className='contact_container'>
        <div className='contact_container_container'>
          <h1 className='contact_title'>contacts</h1>
          <form>
            <label>Full Name</label>
            <input
              type='text'
              id='name'
              name='name'
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder='Full Name...'
            />
            <label>Email</label>
            <input
              type='text'
              id='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder='Email...'
            />
            <label>Subject</label>
            <input
              type='text'
              id='subject'
              name='subject'
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              placeholder='Subject...'
            />
            <label>Message</label>
            <textarea
              type='text'
              id='message'
              name='message'
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder='Message...'
            />
            <button id='send' type='submit' onClick={testing}>
              Send
            </button>
          </form>
        </div>
        <LoadingGlobalOpacity loading={sending} />
      </div>
    </div>
  );
}

export default Contacts;
