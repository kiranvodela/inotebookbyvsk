import React, { useContext, useState } from "react";
import NoteContext from "./context/notes/noteContext";

export const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [notes, setNotes] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(notes.title, notes.description, notes.tag);
    // Reset the form after adding a note (optional)
    setNotes({
      title: "",
      description: "",
      tag: "",
    });
    props.showAlert("Added Note Successfully", "success");
  };

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setNotes({ ...notes, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-3">
        <h2>Add Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={notes.title}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={notes.description}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={notes.tag}
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};
