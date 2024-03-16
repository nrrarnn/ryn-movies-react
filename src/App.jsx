import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import MovieList from './components/MovieList'
import Movie from './pages/Movie'


function App() {
  
  return (
    <div>
    <Router>
      <Header/>
      <div className='content pt-16'>
      <Routes>
         <Route path='/'element={ <Home />}></Route>
         <Route path='movie/:id' element={<Movie/>}></Route>
         <Route path='movies/:type' element={<MovieList/>}></Route>
         <Route path='/*' element={<h1>Error Page</h1>}></Route>
      </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App;
