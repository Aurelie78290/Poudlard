import { Outlet, Link } from 'react-router';

import './App.css';

import Home from './pages/Home';

function App() {

  return (
    <>
    <header>
      <nav>
        <Link to = "/">Home</Link>
        <Link to = "/Houses">Houses</Link>
        <Link to = "/Characters">Characters</Link>
      </nav>
    </header>
    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default App
