import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import './SignIn.scss';

const SignIn: FC = () => {
  const [_email, _setEmail] = useState('');
  const [_password, _setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className='SignIn'>
      <div className='wrapper'>
        <div className='title'>
          <span>Sign in</span>
        </div>
        <form onSubmit={handleSignIn}>
          <div className='row'>
            <input
              type='text'
              placeholder='Email'
              value={_email}
              onChange={e => _setEmail(e.target.value)}
              required
            />
          </div>
          <div className='row'>
            <input
              type='password'
              placeholder='Password'
              value={_password}
              onChange={e => _setPassword(e.target.value)}
              required
            />
          </div>
          <div className='row'>
            <button type='submit'>
              Login
            </button>
          </div>
          <div className='options'>
            <div className="option">
              <Link to='/forgot-password'>
                Forgot your password?
              </Link>
            </div>
            <div className="option">
              Not a member?
              <Link
                to='/sign-up'
                className='sign-up'
              >
                Sign up now
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;