import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "fateme",
    last: "ras",
  };

  const personList = [
    { first: "Nafise", last: "amiri" },
    { first: "Reze", last: "farjodi" },
    { first: "parinaz", last: "ebrahimi" },
  ];

  return (
    <div className="App">
      <Greet name="Fate" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personList} />
      <hr />
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to leonardo dicpario!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
