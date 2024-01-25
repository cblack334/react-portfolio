import './App.css';
import githubimb from "./assetes/github.png"
import linkedimb from "./assetes/linked_icon-icons.com_66731.png"
import photoimg from "./assetes/photo.jpg"


function App() {
  return (
    <div className="App">

      <div className="Top">

        <div className="github">
          <img className="img2" src={githubimb} />
        </div>

        <div className="linkin">
          <img className="img1" src={linkedimb} />
        </div>
      </div>
        <div className="headArt">
          <div className="name">
            <h1><b>Casey J.</b></h1> 
            <h1><b>Black</b></h1>    
          </div>
          <div className="photo">
            <img className="img3" src={photoimg} />

          </div>
          
          


        </div>

     
    </div>
  );
}

export default App;
