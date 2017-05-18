import React from 'react'

const NewPlayList = function (props) {
return (
<div className="well">
  <form className="form-horizontal" onSubmit={props.onSubmit}>
    <fieldset>
      <legend>New Playlist</legend>
      <div className="form-group">
        <div style={props.warnName} className="alert alert-warning">Please enter a name</div>
        <div style={props.warnLength} className="alert alert-warning">Name cannot be more than 16 characters</div>
        <label className="col-xs-2 control-label">Name</label>
        <div className="col-xs-10">
          <input className="form-control" type="text" 
                 onChange={props.handleChange}
                 value={props.inputValue}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
          <button type="submit" disabled={props.disabled} className="btn btn-success">Create Playlist</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
)}

export default NewPlayList;