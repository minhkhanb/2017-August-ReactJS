import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App/App';

ReactDOM.render (
    <App/>,
    document.querySelector ('#app')
);

/*
setTimeout(()=>{
   ReactDOM.unmountComponentAtNode(document.querySelector('#app'))
},10000);*/
