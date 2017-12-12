class Header extends React.Component {
  render() {
    return(
      <div>
        <h1>Indecision</h1>
        <h2>Put Your Life in the hands of a computer</h2>
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
        <p>This is Options Component</p>
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

const jsx = (
    <div>
      <Header />
      <Action />
      <Options />
      <AddOption />
    </div>
)

ReactDOM.render(
  jsx,
  document.getElementById('app')
)
