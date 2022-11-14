type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name}, you have {props.messageCount} unread message
        </h2>
      ) : (
        <h2>Welcome guess</h2>
      )}
    </div>
  );
};

export default Greet;
