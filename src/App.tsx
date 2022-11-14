import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {

  const personName = {
    first: "fateme",
    last: "ras"
  }
  
  const personList = [
    {first: "Nafise", last: "amiri"},
    {first: "Reze", last: "farjodi"},
    {first: "parinaz", last: "ebrahimi"},
  ]

  return (
    <div className="App">
      <Greet name="Fate" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personList} />
    </div>
  );
}

export default App;
