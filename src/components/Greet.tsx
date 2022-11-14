type GreetProps = {
  name: string;
  //   messageCount: number; This props is requird we use ? for editional props
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name}, you have {messageCount} unread message
        </h2>
      ) : (
        <h2>Welcome guess</h2>
      )}
    </div>
  );
};

export default Greet;
