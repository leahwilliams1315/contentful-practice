import './App.css';
import useContentful from "./hooks/use-contentful";
import Person from "./components/personComponent";
import Bookmark from "./components/bookmarkComponent";

const query = `
query {
  person(id: "125eK86tadBMSBwdTy5VKV") {
    name
    socialGithub
    socialLinkedin
    bio {
      json
    }
    image {
      title
      url
    }
  }
  bookmarkCollection {
    items {
      title
      url
      comment
      tagsCollection {
        items {
          title
          colour
        }
      }
    }
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

  const {person, bookmarkCollection} = data;

  return (
    <div className="App">
      <Person person={person}/>
      <div className="bookmark-container">
        {bookmarkCollection.items.map(bookmark => <Bookmark bookmark={bookmark}/>)}
      </div>
    </div>
  );
}

export default App;
