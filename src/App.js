import React, { useEffect, useState } from 'react'
import './App.css';

// fetching the data from the local storage
const getLocalData = ()=>{
  const lists = localStorage.getItem("myTodoList");
  if(lists){
    return JSON.parse(lists);
  }else{
    return [];
  }
}

function App() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [editItem, setEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);
  
  // adding localStorage
  useEffect(()=>{
    localStorage.setItem("myTodoList", JSON.stringify(items));
  }, [items])

  // adding the items
  const addItem = () => {
    if (!inputData) {
      alert("Please enter the data");
    }else if(inputData && toggleButton){
      setItems(
        items.map((curEle)=>{
          if(curEle.id === editItem){
            return {...curEle, name: inputData};
          }
          return curEle;
        })
      );
      setInputData([]);
      setEditItem(null);
      setToggleButton(false);
    }else {
      const myNewInputData ={
        id: new Date().getTime().toString(),
        name: inputData
      }
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  }

  //updating/editing the items
  const editMyItems = (index)=>{
    const itemsTodoEdited = items.find((curEle)=>{
      return curEle.id === index;
    });
    setInputData(itemsTodoEdited.name);
    setEditItem(index);
    setToggleButton(true);
  }

  // remove all the elements
  const removeAll = ()=>{
    setItems([]);
  }
  // deleting the items
  const deleteItem = (index) =>{
    const udpateItems = items.filter((curEle)=>{
      return curEle.id !== index;
    });
    setItems(udpateItems);
  }

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="todo.svg"/>
            <figcaption><strong>Add Your To-Do List Here 👇🏻</strong></figcaption>
          </figure>
          <div className="addItems">
            <input text="text"
              placeholder="✍🏻 Add Item"
              className="form-control"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            {toggleButton ? <i className="fa fa-edit add-btn" onClick={addItem}></i> : <i className="fa fa-plus add-btn" onClick={addItem}></i>}
          </div>
          {/* showing the listed items */}
          <div className="showItems">
            {items.map((curEle)=>{
              return(
            <div className="eachItem" key={curEle.id}>
              <h3>⭐{curEle.name}</h3>
              <div className="todo-btn">
                <i className="far fa-edit add-btn" onClick={()=>editMyItems(curEle.id)}></i>
                <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curEle.id)}></i>
              </div>
            </div>
            );
            })}
          </div>
          {/* rmeove all button  */}
          <div className="showItems">
            <button className="btn effect04" 
            data-sm-link-text="Remove All❌"
            onClick={removeAll}>
              <span> CHECK LIST✅</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;