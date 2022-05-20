import React , {useState} from 'react';
import ReactDom from 'react-dom';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import ErrorModal from './components/UI/ErrorModal';
import classes from './App.module.css';

function App() {
  const [query, setQuery] = useState('');
  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState(false);
  let [list , setList] = useState('');
  const searchedUserHandler = e => {
    if (!e.target.value) {
      setList([...usersList]);
        return;
      }
      else{
        setQuery(e.target.value.toLowerCase());
        setList(usersList.filter(user => user.email.toLowerCase().includes(query)));
        return;
      }
    }
  const addUserHandler = (email, age) => {

    if(email.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid Inputs',
        message: 'Please Enter a valid email and age.'
      });
      return;
    }
    if(+age < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age'
      });
      return;
    }
    // userList.some(user => user.email === email)
    if(usersList.find(user => user.email === email)) {
      setError({
        title: 'Duplicate Email',
        message: 'Email address must be unic.'
      });
      return;
    }
    setError(false);
    setUsersList(prevUsersList => [...usersList, {email , age, id: Math.random().toString()}]);
  };
  const closeModalHandler = () => {
    setError(false);
  }
  return (
    <>
      {error && ReactDom.createPortal(
        <ErrorModal title={error.title} message={error.message} onConfirm={closeModalHandler}/>,
        document.getElementById('modal-root'))}
         <AddUser addUser={addUserHandler} />
         <div className={classes.search}>
         <input placeholder="Search..." onChange={searchedUserHandler} />
         </div>
    <UsersList users={list || usersList} />
  </>
  )
}

export default App;
