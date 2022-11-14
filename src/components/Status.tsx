type StatusProps = {
  // status: string This line work while we send random string work and we want create error while send another string
  status: "loading" | "success" | "error"
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "loading...";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return <div>Status - {message}</div>;
};

export default Status;
