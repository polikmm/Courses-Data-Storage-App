import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { LoginPage } from './components/LoginPage/LoginPage'
import { APP_ROUTES } from './constants'
import { AuthorisationRouter } from './routes/AuthorisationRouter'
import { UserProvider } from './providers/UserProvider'

function App() {
  return (
    <UserProvider>
      <HashRouter>
        <Routes>
          <Route element={<AuthorisationRouter />}>
            
          </Route>
          <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
        </Routes>
      </HashRouter>
    </UserProvider>
  )
}

export default App;
