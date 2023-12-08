 
import './App.css';

import{ BrowserRouter,Routes, Route} from "react-router-dom"


//components
import Home from "./home"
import ProductDetail from "./components/productDetail"
import ProductUpdate from './components/productUpdate';


function App() {
  
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productDetail" element={<ProductDetail/>}/>
          <Route path="/productUpdate" element={<ProductUpdate/>}/>
        </Routes>
    </BrowserRouter>

  )

}

export default App;
