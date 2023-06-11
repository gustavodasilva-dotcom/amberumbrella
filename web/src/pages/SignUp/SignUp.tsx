import { FC, useState } from 'react';

import SignUpForm from './components/SignUpForm';
import SuccessSignUp from './components/SuccessSignUp/SuccessSignUp';

import './SignUp.scss';

const SignUp: FC = () => {
  const [_email, _setEmail] = useState('');
  const [_showSuccess, _setShowSuccess] = useState(false);

  return (
    <section className='SignUp'>
      <div className='wrapper'>
        {_showSuccess ? (
          <SuccessSignUp email={_email} />
        ) : (
          <SignUpForm
            setShowSuccess={_setShowSuccess}
            email={_email}
            setEmail={_setEmail}
          />
        )}
      </div>
    </section>
  );
};

export default SignUp;