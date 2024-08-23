




function App() {

let currency = 'inr'
let curr = fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
.then(res => res.json)

console.log(curr);

  return (
    <>
    <div className="root-page">
      <h2 className="heading">Currency Converter</h2>

      <div className="container">
        <div className="content-container">
          <div className="input-content">
            <label htmlFor="from">From</label>

            <input 
              type="text" 
              value={0}
              name="from" />
          </div>

          <div className="input-content">
            <label htmlFor="crType">Currency Type</label>
            <select 
              name="crType" 
              
              value={'usa'}
              id="">
              <option value="usa"></option>
            </select>
          </div>    
          
        </div>
        <button className="swap-btn">Swap</button>
        

        <div className="content-container">
          <div className="input-content">
            <label htmlFor="from">To</label>

            <input 
              type="text" 
              value={0}
              name="to" />
          </div>

          <div className="input-content">
            <label htmlFor="crType">Currency Type</label>
            <select 
              name="crType" 
              
              value={'usa'}
              id="">
              
            </select>
          </div>    
        </div>

        <button className="convert-btn">Convert USD to INR</button>
      </div>
    </div>
    
    
    </>  
  )
  }

  

export default App
