import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Allroutes from "./Allroutes";
import { fetchallusers } from "./action/users";
import { useDispatch } from "react-redux";
import { fetchallquestion } from "./action/question";

function App() {
  const [slidein, Setslidein] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchallusers());
    dispatch(fetchallquestion())
  }, [dispatch]);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      Setslidein(false);
    }
  }, []);

  const handleslidein = () => {
    if (window.innerWidth <= 768) {
      Setslidein(!slidein);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar handleslidein={handleslidein}></Navbar>
        <Allroutes slidein={slidein} handleslidein={handleslidein}></Allroutes>
      </Router>
    </div>
  );
}

export default App;
