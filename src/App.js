
import './App.css';
import '@google/model-viewer';
import Logo from "./logo.svg"
import Model from "./Model-Viewer-Test-File.glb"


function App() {
  return (
    <div className="App">
      <h1>Test Model</h1>
      <img src={Logo} alt="logo" />

    
      <model-viewer
        src={Model}
        // ios-src={../Link/To/Model.usdz}
        alt='model name'
        ar
        loading='lazy'
        camera-controls
        // poster={../Link/To/Image.png}
        autoplay>
      </model-viewer>

    </div>
  );
}

export default App;
