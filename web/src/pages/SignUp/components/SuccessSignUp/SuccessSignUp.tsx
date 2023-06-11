import { FC } from 'react';

import { ISuccessSignUpProps } from './SuccessSignUp.types';
import { ReactComponent as Mailbox } from '../../../../assets/svgs/undrawMailbox.svg';
import './SuccessSignUp.scss';

const SuccessSignUp: FC<ISuccessSignUpProps> = ({ email }) => {
  return (
    <div className='SuccessSignUp'>
      <div className='title'>
        <span>Sign up successfully executed</span>
      </div>
      <div className='container'>
        <div className='message'>
          <p>We sent an email to <span>{email}</span> so you can confirm the registration.</p>
        </div>
        <Mailbox />
      </div>
    </div>
  );
};

export default SuccessSignUp;