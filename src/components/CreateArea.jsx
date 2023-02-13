import React, { useState } from "react";

function CreateArea({ addItems }) {
  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitNote(e) {
    addItems(input);
    setInput({
      title: "",
      content: ""
    });

    e.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleInput}
          name="title"
          placeholder="Title"
          value={input.title}
        />
        <textarea
          onChange={handleInput}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={input.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
