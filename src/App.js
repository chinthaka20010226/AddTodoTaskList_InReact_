// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";

function App() {
  const[isCompleted,setIsCompleted] = useState(false);

  const[allItems,setAllItems] = useState([]);
  const[itemTitle,setItemTitle] = useState("");
  const[itemDescription,setItemDescription] = useState("");

  const[completedItem,setCompletedItem] = useState([]);

  let handelCompletedDeleteTodo = (index) => {
    let saveCompletedTodo = [...completedItem];

    if(saveCompletedTodo){
      saveCompletedTodo.splice(index,1);
    }

    localStorage.setItem('completedTodoList',JSON.stringify(saveCompletedTodo));

    setCompletedItem(saveCompletedTodo);
  }

  const handelCompleteTodo = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth();
    let yyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let completedOn = dd + '-' + mm + '-' + yyy + ' at ' + h + ':' + m + ':' + s;

    let filterItem = {
      ...allItems[index],
      completedOn: completedOn
    };

    let updateCompletedArr = [...completedItem];

    updateCompletedArr.push(filterItem);

    setCompletedItem(updateCompletedArr);

    localStorage.setItem('completedTodoList',JSON.stringify(updateCompletedArr));

    handelDeleteTodo(index);
  }

  const handelDeleteTodo = (index) => {
    let saveTodo = [...allItems];

    // saveTodo.splice(index,1);
    if(saveTodo){
      saveTodo.splice(index,1);
    }

    // save in Local Storeage
    localStorage.setItem('todoList',JSON.stringify(saveTodo));

    setAllItems(saveTodo);
  }

  const handelAddItem = () => {
    // set title, description
    let item = {
      title: itemTitle,
      description: itemDescription
    };

    // copy previous Items Array
    let updatedItemArr = [...allItems];

    if(item.title !== '' & itemDescription !== ''){
          // update Array
    updatedItemArr.push(item);

    setAllItems(updatedItemArr);

    // Strore in Local Storage as Object,
    // localStorage.setItem('todoList',updatedItemArr);

    // Store in Local Storage as Array,
    // passing Array to String -> not Object,
    localStorage.setItem('todoList',JSON.stringify(updatedItemArr));
    }
  }


  useEffect(() => {
    // passing String in local storage to Array,
    let saveTodo = JSON.parse(localStorage.getItem('todoList'));

    // check Empty
    if(saveTodo){
      setAllItems(saveTodo);
    }

    let saveCompletedTodo = JSON.parse(localStorage.getItem('completedTodoList'));

    if(saveCompletedTodo){
      setCompletedItem(saveCompletedTodo);
    }
  },[]);


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
                    <input type="text" value={itemTitle} onChange={(e) => setItemTitle(e.target.value)} id="title" placeholder="What is new title ???"></input>
                  </div>
                  <div className="col-4 item d-flex flex-column">
                    <label className='mb-1 fw-bold' for="description">Description</label>
                    <input type="text" value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} id="description" placeholder="What is new description ???"></input>
                  </div>
                  <div className="col-2 item pt-4 add">
                    <button type="button" onClick={handelAddItem} className="add-btn p-1 px-3">Add</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="todo-container col card">
                <div className="card-body d-flex flex-column">
                  <div className="bottom-btn d-flex">
                    <button 
                      className={`${isCompleted === false && `active`} secondary-btn`}
                      onClick={() => setIsCompleted(false)}
                      type="button">ToDo</button>
                    <button 
                      className={`secondary-btn ${isCompleted === true && `active`}`} 
                      onClick={() => setIsCompleted(true)}
                      type="button">Completed</button>
                  </div>
                  <div className="add-section d-flex flex-column">
                    {
                      isCompleted === false && allItems.map((item,index) => {
                        return(
                          <div className='add-item d-flex flex-row mb-2' key={index}>
                            <div className='item-text d-flex flex-column h-100'>
                              <h2>{item.title}</h2>
                              <p>{item.description}</p> 
                            </div>                                                                                     
                            <div className='item-icon d-flex flex-row h-100'>
                              <AiOutlineDelete className='delete' onClick={() => handelDeleteTodo(index)} title='delete ???' />
                              <FaCheck className='check' onClick={() => handelCompleteTodo(index)} title='check ???' />
                            </div>                                                                                     
                          </div>
                        );
                      })
                    }

                    {
                      isCompleted === true && completedItem.map((item,index) => {
                        return(
                          <div className='add-item d-flex flex-row mb-2' key={index}>
                            <div className='item-text d-flex flex-column h-100'>
                              <h2>{item.title}</h2>
                              <p>{item.description}</p> 
                              <p><small>Completed On : {item.completedOn}</small></p> 
                            </div>                                                                                     
                            <div className='item-icon d-flex flex-row h-100'>
                              <AiOutlineDelete className='delete' onClick={() => handelCompletedDeleteTodo(index)}/>
                              {/* <FaCheck className='check' onClick={() => handelCompleteTodo(index)} /> */}
                            </div>                                                                                     
                          </div>
                        );
                      })
                    }
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
