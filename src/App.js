import Contact from "./components/Contact";
import './App.css';



const contacts = {
  avatar: "https://www.nautiljon.com/images/jeuxvideo_persos/00/76/nathan_drake_2067.jpg",
  name: "Nathan Drake",
  online: true, 
}
function App() {
  return (
    <div className="App">
      <Contact props={{
        contacts
      }} />
    </div>
  );
}

export default App;
