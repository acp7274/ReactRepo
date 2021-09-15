import React from 'react'; //dependency in node_modules
import ReactDom from 'react-dom';

function Greeting() {
  return <h4>This is Aaron and this is my first component</h4>;
}

ReactDom.render(<Greeting />, document.getElementById('root'));
