import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
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
      <hr />
      <Button
        handleClick={(event, id) => {
          console.log(event, id);
          alert("hello world!");
        }}
      />
      <Input
        value=""
        handleChange={(event) => console.log(event.target.value)}
      />
      <hr />
      <Container
        styles={{ border: "1px solid red", padding: "1rem", margin: "2rem" }}
      />
    </div>
  );
}

export default App;
