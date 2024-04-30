import { Component } from "react";
import "./App.css"
import DataComponent from './components/DataComponent';

export default class AppClass extends Component{
   render(){
        return(
      <>
      <h1>KALVIUM GALLERY</h1>
      <div className="app_1">
        {DataComponent.map((elephnt)=>{
          return <img key={elephnt.id} src={elephnt.img}  alt={elephnt.id} />
        })}
      </div>
      </>
    )
  }
}
