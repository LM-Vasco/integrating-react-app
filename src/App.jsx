import { Route, Routes } from "react-router-dom"

import Homepage from './pages/Homepage'
import ProjectListPage from './pages/ProjectListPage'
import Navbar from "./components/NavBar"


function App() {

  return (
    <>
      <div className="App">
        {<Navbar />}

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<ProjectListPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
