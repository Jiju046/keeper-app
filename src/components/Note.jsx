import React from "react";

function Note({ title, content, deleteNotes, id, comp }) {
  function handleClick() {
    deleteNotes(id);
  }

  return (
    comp && (
      <div className="note">
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={handleClick}>DELETE</button>
      </div>
    )
  );
}

export default Note;
