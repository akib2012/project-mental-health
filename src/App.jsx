import { Outlet } from 'react-router'
import './App.css'
/* import Banner from './Banner'
import Health from './Components/health' */
import Nabvar from './Components/Nabvar'

function App() {


  return (
    <>
      <Nabvar></Nabvar>
      <Outlet></Outlet>
    </>
  )
}

export default App
