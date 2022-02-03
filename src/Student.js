export default function Student(props) {
  return (
    <div style={{ backgroundColor: "blue", margin: 10, textAlign: "center" }}>
      <h1>Hello my name is {props.name}</h1>
    </div>
  );
}
