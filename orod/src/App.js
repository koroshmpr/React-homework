import React , {useState} from 'react';
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
const INITIAL_VALUE = [

  {
    id:'es01',
    title : 'Injury',
    amount : 50,
    date : new Date(2020 ,4 , 14)
  },
  {
    id:'es02',
    title : 'Gas',
    amount : 23.99,
    date : new Date(2019 ,2 , 1)
  },
  {
    id:'es03',
    title : 'vacasion',
    amount : 350,
    date : new Date(2021 ,12 , 25)
  },
  {
    id:'es04',
    title : 'Pay Bills',
    amount : 120,
    date : new Date(2022 ,3 , 11)
  }
];

function App() {
  const [expenses, setExpenses ] = useState(INITIAL_VALUE);
    const onAddExpenseHandler = expense => {
      setExpenses( prevExpenses => [expense , ...prevExpenses]);
    }
       
  return (
    <div className='container'>
      <NewExpense onAddExpense = {onAddExpenseHandler}/>

      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
