import Message from './Message';

//component
function Welcome(props) {
  return (
    <div>
      <h1>hello {props.name}</h1>;
      <Message message="How are you doing?" />
    </div>
  );
}
export default Welcome;
