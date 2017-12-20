import React from 'react';

export default class Expenseform extends React.Component {
  state = {
    description: '',
    note: '',
    amount: undefined
  };
  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState({description})
  }
  onNoteChange = (e) => {
    const note = e.target.value
    this.setState({note})
  }
  onAmountChange = (e) => {
    const amount = e.target.value
    this.setState({amount})
  }
  render() {
    return(
      <form>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="number"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
          min="0.00"
          step="0.01"
        />
        <textarea
          placeholder="Optional: Add a note for your expense"
          value={this.state.note}
          onChange={this.onNoteChange}
          >

        </textarea>
        <button>Add Expense</button>
      </form>)
  }
}
