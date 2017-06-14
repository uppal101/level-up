import React from 'react';
import { Message } from 'semantic-ui-react';

const AdminConfirmMessage = () => (
  <Message>
    <Message.Header>
      Please Confirm Your Account
    </Message.Header>
    <p>
      Before logging in to lvl^ please confirm your email address by clicking the link in our email.
      Please check the spam folder if you do not see it. If you think you have reached this page in error,
      please contact us at lvlupteam@lvlup.tech;
    </p>
  </Message>
);

export default AdminConfirmMessage;
