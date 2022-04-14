import React, { useContext} from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom'; 
import { Context } from '../../ContextApi'; 
export default function Navbar() {
  const { actions }:any = useContext(Context);
  const getLatest= () => {
    actions.setQueries({
        search:"latest"
    }) 
    actions.getAnswer()
}
  const getBitcoins= () => {
    actions.setQueries({
        search:"bitcoin"
    }) 
    actions.getAnswer()
}
  const getMarvel= () => {
    actions.setQueries({
        search:"marvel"
    }) 
    actions.getAnswer()
}

  return (
    <>
    <div className='container-full navbar-dark bg-dark'>
    <div className='container'>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="#">API News</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={"/"}>
              <button className="m-1" id='latest' onClick={() => {getLatest()}} >
                Newest
              </button>
            </Link>
            <Link to={"/bitcoin"}>
              <button className="m-1"  id='bitcoin' onClick={() => {getBitcoins()}}>
                Bitcoin
              </button>
            </Link>
            <Link to={"/marvel"}>
              <button className="m-1"  id='marvel' onClick={() => {getMarvel()}}>
                Marvel
              </button>
            </Link>
          </div>
        </div>
      </nav>
      </div>
      </div>
    </>
  );
}
