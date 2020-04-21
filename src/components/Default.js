import React from 'react';

const Default = (props) => {
  return (
    <div>
      <h1>404</h1>
      <h1>error page not found</h1>
      <h1>The requested URL{props.location.pathname} dost not exist</h1>
    </div>
  );
};

export default Default;
