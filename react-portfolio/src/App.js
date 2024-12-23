import './App.scss'
import Home from './components/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter basename="/react-portfolio">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
