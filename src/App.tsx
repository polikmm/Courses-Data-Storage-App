import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { LoginPage } from './components/LoginPage/LoginPage'
import { APP_ROUTES } from './constants'
import { AuthorisationRouter } from './routes/AuthorisationRouter'
import { UserProvider } from './providers/UserProvider'
import { Header } from './components/Header/Header'
import { CoursesContainer } from './components/CoursesContainer/CoursesContainer'
import { Courses } from './components/Courses/Courses'

function App() {
  return (
    <UserProvider>
      <HashRouter>
        <Header />
        <Routes>
          <Route element={<AuthorisationRouter />}>
             <Route path={APP_ROUTES.HOME} element={<CoursesContainer />}>
              <Route index path={APP_ROUTES.COURSES} element={<Courses />} />

            </Route>
          </Route>
          <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
        </Routes>
      </HashRouter>
    </UserProvider>
  )
}

export default App;
