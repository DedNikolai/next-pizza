import React from 'react';

interface Props {
    code: string;
  }
    
  export const VerificationUserTemplate: React.FC<Props> = ({ code}) => (
    <div>
        Ваш код підтвердження: 
        <p><a href={`http://localhost:3000/api/auth/verify?code=${code}`}>Confirm registration</a></p>
      </div>
  );