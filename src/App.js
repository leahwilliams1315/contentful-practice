import './App.css';
import useContentful from "./hooks/use-contentful";
import Person from "./components/personComponent";

const query = `
query {
  person(id: "125eK86tadBMSBwdTy5VKV") {
    name
    socialGithub
    socialLinkedin
  }
}
`;

function App() {
  let {data, errors} = useContentful(query)


  if (errors) {
    return (
      <span style={{color: 'red'}}>
        {errors.map(error => error.message).join(",")}
      </span>
    )
  }

  if (!data) {
    return <span>Loading...</span>
  }

  return (
    <div className="App">
      <Person person={data.person}/>
      {/*{data.person.name}*/}
    </div>
  );
}

export default App;
