import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { LoginPage } from './components/LoginPage/LoginPage'
import { APP_ROUTES } from './constants'
import { AuthorisationRouter } from './routes/AuthorisationRouter'
import { UserProvider } from './providers/UserProvider'
import { Header } from './components/Header/Header'
import { Courses } from './components/Courses/Courses'
import { Course } from './components/Course/Course'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAuthors } from './store/authorsSlice/authorsSlice'
import { fetchCourses } from './store/coursesSlice/coursesSlice'
import type { AppDispatch } from './store'
import { Wrapper } from './components/Wrapper/Wrapper'

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() =>{
    dispatch(fetchAuthors());
    dispatch(fetchCourses());
  }, [])
  
  return (
    <UserProvider>
      <HashRouter>
        <Header />
        <Routes>
          <Route element={<AuthorisationRouter />}>
            <Route path={APP_ROUTES.HOME} element={<Wrapper />}>
              <Route index path={APP_ROUTES.COURSES} element={<Courses />} />
              <Route
                path={APP_ROUTES.COURSE_INFO_TEMPLATE}
                element={<Course />}
              />
            </Route>
          </Route>
          <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
        </Routes>
      </HashRouter>
    </UserProvider>
  )
}

export default App;
