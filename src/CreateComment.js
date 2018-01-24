import React from 'react'

class CreateComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: null,
      comment: {
        text: "",
        properties: {
          likes: 0,
          shares: 0
        }
      }
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);

  }


  handleClick() {

    fetch('http://localhost:4000/comments', {
      "body": JSON.stringify(this.state.post),
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      "method": "POST"
    })
    .then((response) => response.json())
    .then(json => {
      setTimeout(_ => {
        console.log("data POST");
        window.location.reload();
      }, 2000);
    });
    console.log("will post");
  }

  handleTextChange = (e) => {
    var newComment=this.state.comment;
    newComment.text = e.target.value;
    this.setState({post: newComment})
  }

  render() {
    return(

        <div className="create_comment">
          <div className="container header_box">
            <h1>MiniBlog</h1>
          </div>
          <div className="container form_area">
            <textarea onChange={this.handleTextChange} placeholder="What's on your mind?"></textarea>
            <button onClick={this.handleClick}>Post</button>
          </div>
        </div>
    )
  }
}

export default CreateComment
