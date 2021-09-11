import './style.css'
import './App.css';
import image1 from './imageInSrc.jpg'

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1 black",maxWidth: "100vw"}}>

        <h1 className="title red">Yessine</h1>       
        <br />
        <img 
        src={image1} 
        alt= "imageInSrc"
        width= "70%"
        height= "500"
        />        
        <br />
        <img 
        src="/imageInPublic.jfif" 
        alt= "imageInPublic"
        width= "70%"
        height= "500"
        />

      </div>

      <video width="320" height="240" controls>

        <source src="myVideo.mp4" type="video/mp4" />

      </video>
    </div>
  );
}

export default App;
