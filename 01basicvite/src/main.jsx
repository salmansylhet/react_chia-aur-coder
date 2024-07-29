import React from 'react'
import ReactDOM from 'react-dom/client'
import MyApp from './App.jsx'

const anotherElement = (
  <h2>Click me to visit google </h2>
)

const customReactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Visit google ',
  anotherElement //evaluted expression
);



ReactDOM.createRoot(document.getElementById('root')).render(
  
  MyApp()
)
