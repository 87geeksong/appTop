import React from 'react';

const Layout: React.FC = (props) => {
  console.log(props, 'rr');

  return (
    <div>
      <h1>top</h1>
      <div>{props.children}</div>
      <div>footer</div>
    </div>
  );
};
export default Layout;
