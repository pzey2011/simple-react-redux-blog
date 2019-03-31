import React , {Component} from 'react';
 export default class EditForm extends Component {
   constructor(props){
     super(props);
     this.handleEdit=this.handleEdit.bind(this);
     this.handleClose=this.handleClose.bind(this);
   }
   componentDidUpdate(){
     this.getTitle.value=this.props.post.title;
     this.getMessage.value=this.props.post.message;
   }
  handleEdit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message =  this.getMessage.value;
    const data = {
      id: this.props.post.id,
      title,
      message
    };
    this.props.updatePost(data);
    this.getTitle.value=title;
    this.getMessage.value=message;
  }
  handleClose = (e) => {
    e.preventDefault();
    this.props.editPost(this.props.post.id);
  }
  render(){
    return (
      <div className="modal" id={"myModal"+this.props.id}>
        <div className="post modal-content">
          <span className="close" onClick={this.handleClose}>&times;</span>
          <form className="form" onSubmit={this.handleEdit}>
            <input required type="text" placeholder="Enter Post Title"  ref={(input)=>this.getTitle = input}></input><br /><br />
            <textarea required rows="5" cols="28" placeholder="Enter Post" ref={(input)=>this.getMessage = input}></textarea><br /><br />
            <button className="button add-button">Edit</button>
          </form>
        </div>
      </div>
    );
    }
  }
