import "./App.css";
import Navbar from "./components/contents/Navbar";
import Cards from "./components/contents/commissionBox";

function App() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row row g-0">
          <div className="col-md-2 bg-dark shadow-lg d-flex flex-column min-vh-100">
            
          </div>
          <div className="col-md-10 col-lg-10 bg-light">
            <Navbar/>
            <Cards/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
