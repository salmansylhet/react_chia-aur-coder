



function MyApp() {

  const anotherElement = (
    <h2 >Click me to visit google </h2>
    
  )
  return (
    <>
      <a href='https://google.com' target='_blank'>Visit google</a>  
      {anotherElement}
    </>
  )
}


export default MyApp
