// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <section className="h-100 w-100">
      <div className="todo-container container h-100 w-100 py-3">
        <div className="row">
          <div className="col d-flex flex-column h-100 w-100">
            <h1 className="title d-flex justify-content-center py-3">My Todos</h1>                                                                                    
            <div className="row mb-3">
              <div className="col card">
                <div className="card-body d-flex flex-row justify-content-between align-items-center">
                  <div className="item">
                    <label for="title">Title</label>
                      <input type="text" id="title"></input>
                    </div>
                    <div className="item">
                      <label for="description">Description</label>
                      <input type="text" id="description"></input>
                    </div>
                    <div className="item">
                      <button type="button" className="add-btn">Add</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col card">
                <div className="card-body d-flex flex-row">
                  <div className="bottom-btn d-flex ">
                    <button type="button">ToDo</button>
                    <button type="button">Completed</button>
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
