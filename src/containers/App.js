import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class App extends Component {
  static propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  
  render() {
  
    return (
     <div>
     <p>HI</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
 
}

export default connect(mapStateToProps)(App)
