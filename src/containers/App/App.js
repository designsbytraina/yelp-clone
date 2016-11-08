import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import ReactDOM from 'react-dom';

// Can be written either way:
// const App = React.createClass({
//   render: function() {
//     return (
//       <div className={styles.wrapper}>
//         <h1>
//           <i className="fa fa-star"></i>
//           Environment: {__NODE_ENV__}</h1>
//       </div>
//     )
//   }
// });


class App extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  // getter
  get content() {
    return (<Router 
        routes={this.props.routes}
        history={this.props.history} />
    )
  }

  render() {
    return (
      <div style={ { height: '100%' } }>
        {this.content}
      </div>
    )
  }
}

module.exports = App;