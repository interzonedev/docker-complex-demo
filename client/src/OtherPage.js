import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
  return (
    <div>
      Im some other page!
      <p><Link to="/">Go back home</Link></p>
    </div>
  );
};

export default OtherPage;
