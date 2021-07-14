import React from "react";
import NextLink from 'next/link';

export default function Landing() {
  return (
    <>
      <main style={{fontFamily: '"eb garamond", serif', lineHeight: 1.4}}>

        <h1 className="text-3xl" style={{ letterSpacing: 3, marginTop: '1em', textAlign: 'center' }}>
          Gelasio Gaetani D'Aragona
        </h1>

        <div className="flex flex-wrap justify-center">
          <img src='/main.webp' width={265} style={{ margin: '2em 0' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <div style={{ textAlign: 'center', marginBottom: '2em', fontSize: 19, width: 600, maxWidth: '96vw' }}>
            <p>Specialists in the world of Italian wines.</p>
  ​
            <p>From property acquisition or sale to wine making and promoting.<br />
            Marketing for USA, Northern Europe, UK, China, and other growing markets.</p>
            ​
            <p>We take care of communication and public relations for the elite wineries of Italy and offer access to an extensive database of international experts in the vast field of wine culture and science.</p>
            <br />
            <p>Our Philosophy is to disclose the story behind  great wines.<br />
            From biological and cultural lineage to modern day company ethos and methods.</p>
            ​
            <p>Please <a href='#contact' style={{ textDecoration: 'underline' }}>contact us</a> for further informations.</p>
            ​
            <p>artwork by <a href="https://www.carlitodalceggio.com" target="_blank" style={{ textDecoration: 'underline' }}>Carlito Dalceggio</a></p>
          </div>
        </div>
      </main>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-gray-100">
              <div className="flex-auto p-5 lg:p-10">
                <h4 id='contact' className="text-2xl font-semibold text-center">
                  Contact
                </h4>
                <p className="leading-relaxed mt-1 mb-4 text-blueGray-500 text-center">
                  Email: <a href="mailto:g.gelasio@gmail.com" style={{ textDecoration: 'underline' }}>g.gelasio@gmail.com</a>
                </p>
                <div className="relative w-full mb-3 mt-8">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="full-name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full"
                    placeholder="Full Name"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full"
                    placeholder="Email"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    cols="80"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full"
                    placeholder="Your message..."
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
