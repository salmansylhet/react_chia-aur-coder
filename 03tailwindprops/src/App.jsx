
import './App.css'
import Card from './card'

function App() {

  const obj = {
    apple: 'Apple',
    mac: 'Macbook',
    laptop: 'Laptop'
  };

  const arr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-800 text-white p-4 rounded-xl mb-5'>Tailwind Test</h1>

    <Card btnText = 'Click' about = {obj.apple} objInProp = {obj} arrInProp = {arr}/>
    <Card btnText = 'Visit' about = {obj.mac}/>
    <Card btnText = 'Buy' about = {obj.laptop}/>

    </>
  )
}

export default App
