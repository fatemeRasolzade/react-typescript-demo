import "./App.css";
import Private from "./components/Auth/Private";
import Profile from "./components/Auth/Profile";
import Button from "./components/Button";
import { ClassCounter } from "./components/class/ClassCounter";
import Container from "./components/Container";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import List from "./components/generics/List";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import RandomNumber from "./components/restriction/RandomNumber";
import Counter from "./components/state/Counter";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
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
      <hr />
      <LoggedIn />
      <hr />
      <User />
      <hr />
      <Counter />
      <hr />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <hr />
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <hr />
      <ClassCounter message="The count value is" />
      <hr />
      <Private isLoggedIn={true} component={Profile} />
      <hr />
      <List
        items={[
          { id: 1, firstName: "fateme", lastName: "rasolzade" },
          { id: 2, firstName: "fateme", lastName: "rasolzade" },
          { id: 3, firstName: "fateme", lastName: "rasolzade" },
        ]}
        onClick={(item) => console.log(item)}
      />
      <hr />
      <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
