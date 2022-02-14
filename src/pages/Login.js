import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Login() {
  const history = useHistory();
  const passwordRef = useRef();
  return (
    <div className="custom-login-bg relative ">
      <Header />
      <div className="mx-auto flex justify-center text-center md:h-4/6 items-center ">
        <div>
          <p className="font-black text-xl uppercase mb-8">PROVIDER LOGIN</p>
          <form action="" id="login-form">
            <div className="flex flex-col items-center justify-between">
              <input
                type="text"
                className="custom-input m-2 px-6 py-2"
                placeholder="username"
              />
              <input
                type="password"
                className="custom-input m-2 px-6 py-2"
                placeholder="password"
                ref={passwordRef}
              />
              <button
                type="submit"
                className="custom-btn text-white m-2 px-6 py-2"
              >
                REGISTER
              </button>
            </div>
          </form>
          <p className="font-black text-xl uppercase mt-8">NEW PROVIDER</p>
          <button
            className="custom-btn text-white m-2 px-6 py-2"
            onClick={() => {
              history.push('/signup');
            }}
          >
            SIGN UP
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
