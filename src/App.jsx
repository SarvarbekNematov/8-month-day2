import { Route, Routes } from 'react-router-dom'
import Tashkent from './page/Tashkent'
import NewYork from './page/NewYork'
import London from './page/London'
import Header from './components/header'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Tashkent/>}/>
      <Route path='/newYork' element={<NewYork/>}/> 
      <Route path='/london' element={<London/>}/> 
    </Routes>
    </>
  )
}

export default App
