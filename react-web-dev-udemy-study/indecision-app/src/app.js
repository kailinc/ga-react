class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision'
    const subTitle = 'Put Your Life in the hands of a computer'
    const options = ['thing One', 'thing Two', 'thing Three']
    return (
      <div>
        <Header title={ title}  subTitle={ subTitle }/>
        <Action />
        <Options options={ options }/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return(
      <div>
        <h1>{ this.props.title }</h1>
        <h2>{ this.props.subTitle }</h2>
      </div>
    )
  }
}

class Action extends React.Component {
    render() {
      return(
        <div>
          <button>What should I do? </button>
        </div>
      );
    }
}


class Options extends React.Component {
  render() {
    return(
      <div>
        { this.props.options.map((cur, index) => <Option key={ index } value={ cur }/>) }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return(
      <div>
        <p key={ this.props.key }>{ this.props.value }</p>
      </div>
    )
  }
}

class AddOption extends React.Component {
    render() {
      return(
        <div>
          <p>This is AddOptions Component</p>
        </div>
      )
    }
}

ReactDOM.render(
  <IndecisionApp />,
  document.getElementById('app')
)
