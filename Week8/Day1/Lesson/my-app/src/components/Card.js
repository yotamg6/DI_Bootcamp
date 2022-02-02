import "./card.css";
const Card = (props) => {
  const { user } = props;
  const { id, email, username } = user;
  return (
    <div className="tc grow bg-light-green pa3 ma3 dib">
      {/* <h1> I do not use JSX</h1>
      <img src=""></img>
      {props.name}
      {props.email}
      {props.username} */}
      <img src={`https://robohash.org/${id}`}> </img>
      <div>
        <h2>{name}</h2>
        <h4>{email}</h4>
        <p>username</p>
      </div>
    </div>
  );
};

export default Card;
