import './App.css'
import Cards from './Component/Cards';
import Header from './Component/Header'


function App() 
{
  const click = (kazi) => {
    alert('Hello '+kazi);
  }
  return(
    <div className='body'>
      <Header/>
      <div className='main'>
      <Cards fun = { ()=> click ("Kazi tasrif")} name="Kazi tasrif"/>
      <Cards fun = { ()=> click("Pazi tasrif")} name="Pazi tasrif" />
      <Cards fun = { ()=> click("Nazi tasrif")} name="Nazi tasrif"/>
      <Cards fun = { ()=> click("Hazi tasrif")} name="Hazi tasrif" />
      </div>

    </div>
  )
}

export default App
