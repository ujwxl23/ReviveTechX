import './App.css'
// import HomePage from './pages/HomePage';
import Routers from "./common/Routers";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
      <div className="App">
            <BrowserRouter>
                <Routers />
            </BrowserRouter>
        </div>
    </>
  )
}

export default App
