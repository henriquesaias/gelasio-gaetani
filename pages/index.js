import React from "react";
import emailjs from 'emailjs-com';
import {
  init
} from 'emailjs-com';
init("user_i3doLEc81aiVPkLWcqVLx");

export default function Landing() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [userFeedback, setUserFeedback] = React.useState('Send message');

  const sendMail = () => {
    let templateParams = {
      name: name,
      email: email,
      message: message
    };

    if (name.length && email.includes('@') && message.length > 2) {
      emailjs.send('service_avldh1k', 'lxzajri', templateParams)
        .then(function (response) {
          console.log('email sent')
          setUserFeedback('Email sent')
          setSubmitted(true)
        }, function (error) {
          console.log('Error sending email: ', error);
        });
    }
  }

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <main
        style={{
          fontFamily: '"eb garamond", serif',
          lineHeight: 1.4
        }}
      >
        <h1 className="text-3xl"
          style={{
            letterSpacing: 3,
            marginTop: '1em',
            textAlign: 'center'
          }}
        >
          Gelasio Gaetani D'Aragona
        </h1>

        <div className="flex flex-wrap justify-center">
          <img
            alt="Artwork by Carlito Dalceggio"
            src='main.webp'
            width={265}
            style={{ margin: '2em 0' }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              textAlign: 'center',
              marginBottom: '2em',
              fontSize: 19,
              width: 600,
              maxWidth: '96vw'
            }}
          >
            <p>Specialists in the world of Italian wines.</p>
            <p>From property acquisition or sale to wine making and promoting.< br />
              Marketing for USA, Northern Europe, UK, China, and other growing markets.</p>
            <p>We take care of communication and public relations for the elite wineries of Italy and offer access to an extensive database of international experts in the vast field of wine culture and science.</p>
            <br />
            <p>Our Philosophy is to disclose the story behind great wines.<br />
              From biological and cultural lineage to modern day company ethos and methods.</p>
            <p>Please <a href='#contact' style={{ textDecoration: 'underline' }}>contact us</a> for further information.</p>
            <p style={
              {
                opacity: .7,
                marginTop: '2em',
                float: 'right',
                fontSize: 'small'
              }
            }>
              artwork by Carlito Dalceggio
            </p>
          </div>
        </div>
      </main>

      <div className="container mx-auto px-4" >
        <div className="flex flex-wrap justify-center" >
          <div className="w-full lg:w-6/12 px-4" >
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-gray-100" >
              <form onSubmit={
                (e) => {
                  e.preventDefault();
                  sendMail()
                }
              } >
                <div className="flex-auto p-5 lg:p-10" >
                  <h2 id='contact' className="text-2xl font-semibold text-center">
                    Contact
                  </h2>
                  <p className="leading-relaxed mt-1 mb-4 text-blueGray-500 text-center">
                    Samba Gaetani<br />
                    <a
                      href="https://wa.me/393355623329"
                      target="_blank"
                      rel="noreferrer noopener"
                      style={{ textDecoration: 'underline' }}
                    >
                      +39 335 562 3329
                    </a><br />
                    <a
                      href="mailto:sambagaetani@gmail.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      style={{ textDecoration: 'underline' }}
                    >
                      sambagaetani@gmail.com
                    </a>
                  </p>

                  <div className="relative w-full mb-3 mt-8" >
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Name
                    </label>
                    <input type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full"
                      placeholder="Name"
                      value={name}
                      onChange={(event) => handleChangeName(event)}
                      disabled={submitted}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => handleChangeEmail(event)}
                      disabled={submitted}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea rows="4"
                      cols="80"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full"
                      placeholder="Your message..."
                      value={message}
                      onChange={(event) => handleChangeMessage(event)}
                      disabled={submitted}
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      style={{
                        backgroundColor: userFeedback === 'Email sent' && 'darkgreen'
                      }}
                      type="button"
                      onClick={() => sendMail()}>
                      {userFeedback}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
