import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "../styles.css"

function App() {
  const [addItem, setAddItem] = useState([]);

  const [comp, setComp] = useState(false);

  function addItems(input) {
    setComp(true);
    setAddItem((prevValue) => {
      return [...prevValue, input];
    });
  }

  function deleteNote(id) {
    setAddItem((prevValue) => {
      //prevValue of additem and filter its index which is not equal to id
      return prevValue.filter((item, index) => {
        return index !== id; //in an array except the index =id
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addItems={addItems} />
      {addItem.map((item, index) => {
        //addItem is array of prev value and current value
        return (
          //iteration depends on the array of objects
          <Note
            id={index}
            key={index}
            title={item.title}
            content={item.content}
            deleteNotes={deleteNote}
            comp={comp}
          />
        );
      })}
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
