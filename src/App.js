import React from 'react';
import './App.css';
import CreateComment from './CreateComment'



class DisplayAll extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: null
    }
  }

  componentWillMount() {
    fetch('http://localhost:4000/comments')
    .then(response => response.json())
    .then(json => {
      setTimeout(_ => {
        this.setState({
          comments: json
        });
        console.log("comments data:", this.state.comments)
      }, 2000);
    });
  }
  render() {
    return(
      <div className="display_all">
        {this.state.comments? this.state.comments.map(comment => {
            return(<DisplayComment key={comment.id} comment={comment}/>);
          }):"loading"
        }
      </div>
    )
  }
}

class DisplayComment extends React.Component {
  render() {
    return(
      <div className="container display_comment">
        <p>{this.props.comment.text}</p>
      </div>
    );
  }
}



class App extends React.Component {

  render() {
    return(
      <div className="container">
        <CreateComment />
        <DisplayAll/>
      </div>
    )
  }
}

export default App;
