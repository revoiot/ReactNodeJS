import React from 'react';
import ReactDOM from 'react-dom';

// const Index = () => {
//   return <div>Hello React!</div>;
// };

// Spaceを開けてlintエラーを起こす
fetch(   '/api/'   ).then(response => {
  console.log(response.json());
})

export const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById('index'));