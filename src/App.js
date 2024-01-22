import './App.css';
import githubimb from "./assetes/github.png"
import linkedimb from "./assetes/linked_icon-icons.com_66731.png"


function App() {
  return (
    <div className="App">
     <div className="Top">

      <div className="github">
        <img className="img2" src = {githubimb}/>
      </div>
      <div className="linkin">
        <img className="img2"src = {linkedimb}/>
      </div>

     </div>
    </div>
  );
}

export default App;
