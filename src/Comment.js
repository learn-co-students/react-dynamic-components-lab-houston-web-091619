//your code here
import React, { Component } from 'react'; //import React, { Component } from 'react' at the top of our file
import BlogPost from './BlogPost.js' //import the class in BlogPost


export default class Comment extends Component {   //Use the class X extends Component {} syntax
    render (props) {
        return (
            <div className="comment">  
            {this.props.commentText}
            </div>
        )
    }
}
// export default App;  //export the class so it can be used in other files

// The <div> should have a className="comment" attribute

//Don't forget - we can unpack variable values directly with JSX by wrapping them in {}, i.e. {this.props.commentText}

