import React, { Component } from 'react'

class Homepage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      poem: ''
    }
  }

  componentDidMount() {
    fetch('http://ShakeItSpeare.com/api/poem')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({
          poem: json.poem
        })
      })
      .catch((error) => console.log('this is error ', error))
  }

  render() {
    let poetry = this.state.poem
    if (poetry === '') {
      return(
        <div>
          <h1>My Favoriate Shakespeare poem</h1>
          <h3>Wait</h3>
        </div>
      )
    }
    return(
      <div>
        <h1>My Favoriate Shakespeare poem</h1>
        <h3>{this.state.poem}</h3>
      </div>
    )
  }
}

export default Homepage
