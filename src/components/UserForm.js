import React,{ useState } from "react";


export default function UserForm({addUserInput}) {

  const [dataInput, setDataInput] = useState({
    name: "",
    comment: "",
    suggestion: "",
  });

  const handleChange = (event) => {
    setDataInput({ ...dataInput, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUserInput(dataInput);
    setDataInput({ name: "", comment: "", suggestion: "" });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}> 
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={dataInput.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            type="text"
            name="comment"
            placeholder="Email"
            value={dataInput.comment}
            onChange={handleChange}

          />
        </div>
        <div>
          <textarea
            type="text"
            name="suggestion"
            placeholder="Phone Number"
            value={dataInput.suggestion}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
     
    </div>
  );
}