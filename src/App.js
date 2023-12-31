import {BrowserRouter, Routes, Route} from "react-router-dom";

import { Home } from "./pages/Home/home";
import { Profile } from "./pages/profile/profile";



const App =() => {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
  </BrowserRouter>
  </>
}

export default App;
