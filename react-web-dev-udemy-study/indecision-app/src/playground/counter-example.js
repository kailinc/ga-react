class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleAddOne() {
    console.log('adding')
  }

  handleMinusOne() {
    console.log('minusing one')
  }

  handleReset() {
    console.log('reseting')
  }

  render() {
    return(
      <div>
        <h1>Counter Application</h1>
        <button onClick={ this.handleAddOne }>Add</button>
        <button onClick={ this.handleMinusOne }>Minus</button>
        <button onClick={ this.handleReset }>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
)

// // JSX - JavaScript XML
// console.log('app.js is running')
//
// let app = {
//   title: 'Indecision App',
//   subTitle: 'App Fit for a King',
//   options: ['One', 'Two']
// }
//
// const template = (
//   <div>
//     <h1>{ app.title }</h1>
//     { app.subTitle && <p>{ app.subTitle }</p> }
//     <p>{ app.options.length > 0 ? 'Here are your options' : 'You have no options' }</p>
//     <ol>
//       <li>Item one</li>
//       <li>Item two</li>
//     </ol>
//   </div>
// )
//
// let count = 0
//
// const addCount = () => {
//   count++;
//   renderCounterApp()
// }
//
// const minusCount = () => {
//   count--;
//   renderCounterApp()
// }
// const resetCount = () => {
//   count = 0;
//   renderCounterApp()
// }
//
// const appRoot = document.getElementById('app');
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: { count }</h1>
//       <button onClick={ addCount }> +1 </button>
//       <button onClick={ minusCount }> -1 </button>
//       <button onClick={ resetCount }>Reset</button>
//     </div>
//   );
//
//   ReactDOM.render(
//     templateTwo,
//     appRoot
//   );
// }
//
// renderCounterApp()
