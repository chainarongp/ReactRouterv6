import {Link, Route,Routes} from 'react-router-dom'
import {useParams} from 'react-router-dom'

const Home = () => <h1>Home</h1>;

const Book = () =>{
const {id } =  useParams()
return (
    <>
     <h1>My book  {id}</h1>;
    </>
  )
};

const NewBook = () =>{
  const {id } =  useParams()
  return (
      <>
       <h1>New book  {id}</h1>;
      </>
    )
  };

 const  NotFound = () =>{
  return (
    <>
     <h1>NotFound 404</h1>;
    </>
  )
 }
 
const BookList = () =>  {
    return ( 
      <>
      <h1>Books</h1>
      <Link to ="/books/1"> book 1 </Link>
       <br/>
      <Link to ="/books/2"> book 2 </Link>
      <br/>
      <Link to ="/books/new"> New book </Link>
     </>
    );
  };

function App(){
  return(
  <>    
      <nav>
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/books">Books</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element= { <Home/>}/>
          <Route path="/books">
              <Route path=":id" element= {<Book/> } />
              <Route path="new" element= {<NewBook/>}/>
          </Route>
        {/* <Route path="/books" element= {<BookList/>}/>
        <Route path="/books/:id" element= {<Book/>}/>
        <Route path="/books/new" element= {<NewBook/>}/> */}
        <Route path="*" element= {<NotFound/>}/>
      </Routes>
     </>
)}
export default App;