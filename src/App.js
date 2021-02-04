import "./App.css";
import Photo from "./component/profil/photo-profil";
import Fullname from "./component/profil/fullname";
import Adresse from "./component/profil/adresse";

function App() {
  return (
    <div className="App-header">
      {/* Photo part */}
      <Photo className="Img"/>

      {/* Name part */}
      <Fullname />

      <Adresse />
    </div>
  );
}

export default App;
