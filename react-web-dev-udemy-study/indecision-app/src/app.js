// JSX - JavaScript XML
var tempalte = (
  <div>
    <h1>Indecision App</h1>
    <p>For people who dont know what to do with their life</p>
  </div>
)

var templateTwo = (
  <div>
    <h1>Kailin Chen</h1>
    <p>Age: 22</p>
    <p>Location: Boston, MA</p>
  </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(
  templateTwo,
  appRoot
);
