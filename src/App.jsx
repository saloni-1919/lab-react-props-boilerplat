import './App.css';
import DataComponent from './components/DataComponent';

function App() {
  return (
    <> 
      <h1>KALVIUM GALLERY</h1> 
      <div className="app_1">
      {DataComponent.map((elephnt)=>{
        return <img src={elephnt.img} alt="elephant" key={elephnt.id}/>
      })}
    </div>
    </>
  );
}

export default App;
