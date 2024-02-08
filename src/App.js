// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const[isCompleted,setIsCompleted] = useState(false);

  return (
    <section className="h-100 w-100">
      <div className="container h-100 w-100 py-3">
        <div className="row">
          <div className="col d-flex flex-column h-100 w-100">
            <h1 className="title d-flex justify-content-center py-3">My Todos</h1>                                                                                    
            <div className="row mb-3">
              <div className="todo-container col card">
                <div className="card-body d-flex flex-row justify-content-between align-items-center">
                  <div className="col-4 item d-flex flex-column">
                    <label className='mb-1 fw-bold' for="title">Title</label>
                    <input type="text" id="title" placeholder="What is new title ???"></input>
                  </div>
                  <div className="col-4 item d-flex flex-column">
                    <label className='mb-1 fw-bold' for="description">Description</label>
                    <input type="text" id="description" placeholder="What is new description ???"></input>
                  </div>
                  <div className="col-2 item pt-4">
                    <button type="button" className="add-btn p-1 px-3">Add</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="todo-container col card">
                <div className="card-body d-flex flex-row">
                  <div className="bottom-btn d-flex ">
                    <button 
                      className={`${isCompleted === false && `active`} secondary-btn`}
                      onClick={() => setIsCompleted(false)} 
                      type="button">ToDo</button>
                    <button 
                      className={`secondary-btn ${isCompleted === true && `active`}`} 
                      onClick={() => setIsCompleted(true)}
                      type="button">Completed</button>
                  </div>
                  <div className="add-section">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
