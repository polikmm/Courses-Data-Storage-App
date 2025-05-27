import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { LoginPage } from './components/LoginPage/LoginPage'
import { APP_ROUTES } from './constants'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
