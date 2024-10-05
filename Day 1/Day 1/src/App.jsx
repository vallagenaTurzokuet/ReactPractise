import './App.css'
import Cards from './Component/Cards';
import Header from './Component/Header'

function App() 
{
  return(
    <div className='body'>
      <Header/>
      <div className='main'>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      </div>

    </div>
  )
}

export default App
