import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Info from "./Info";
import Isi from "./Isi";

function App() {
  return (
    <div>
      <Navbar />
      <br></br>
      <Home />
      <br></br>
      <Info />
      <br></br>
      <Isi />
      <br></br>
      <footer>
        <div class="container-fluid bg-black">
          <br></br>
          <p class="text-center text-white">Copyright@2016.PT COMPANY</p>

          <div class="text-center">
            <img src="/img/facebook-official.png" />
            <img src="/img/twitter.png" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
