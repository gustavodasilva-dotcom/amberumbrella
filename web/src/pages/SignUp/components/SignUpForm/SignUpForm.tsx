import { FC, useState } from 'react';

import axios from '../../../../api/axios';

import { ISignUpFormProps } from './SignUpForm.types';

const SignUpForm: FC<ISignUpFormProps> = ({
  setShowSuccess,
  email,
  setEmail
}) => {
  const [_name, _setName] = useState('');
  const [_password, _setPassword] = useState('');

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios.post('v1/sign-up', {
      name: _name,
      email: email,
      password: _password
    })
      .then(() => {
        setShowSuccess(true);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className='title'>
        <span>Sign up</span>
      </div>
      <form onSubmit={handleSignUp}>
        <div className='row'>
          <input
            type='text'
            placeholder='Name'
            value={_name}
            onChange={e => _setName(e.target.value)}
            required
          />
        </div>
        <div className='row'>
          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;