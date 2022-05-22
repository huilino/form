import React from 'react';
import {Modal} from 'bootstrap';

export default function UpdateForm() {
    const [updateData, setUpdateData] = useState({
        name: "",
        comment: "",
        suggestion: "",
      });

      const handleChange = (event) => {
        setUpdateData({ ...updateData, [event.target.name]: event.target.value });
      };
  return (
    <>
    <div><h3>UpdateForm</h3></div>
    
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">UPDATE</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
      <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={updateData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            type="text"
            name="comment"
            placeholder="Email"
            value={updateData.comment}
            onChange={handleChange}

          />
        </div>
        <div>
          <textarea
            type="text"
            name="suggestion"
            placeholder="Phone Number"
            value={updateData.suggestion}
            onChange={handleChange}
          />
        </div>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
  
</div>
</>
  )
}
