import React from 'react';

const NotFoundPage = ({staticContext = {}}) => {
  staticContext.notFound = true;
  return (
     <div className="center-align" style={{marginTop: '200px'}}>
       <h3>Oops! Page not found.</h3>
       <p>We might missed something.</p>
     </div>
  )
};

export default {
  component: NotFoundPage
};