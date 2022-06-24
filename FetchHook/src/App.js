import React from 'react';
import UseFetch from './components/useFetch';
import './app.css';
import Button from './components/UI/Button';

function App() {
  const { data, loading, error ,refetch} = UseFetch("https://swapi.dev/api/films");
  if (loading) return <h1>LOADING...</h1>
  if (error) return <h1>error</h1>

  const List = data?.results.map(item =>
    <li className='list' key={item.episode_id}>
      <h2>{item.title}</h2>
      <h4>{item.opening_crawl}</h4>
      <p>{item.release_date}</p>
    </li>)
  return (
    <>
    <Button onClick={refetch}>Refresh</Button>
    <ul className='mainList'>
      {List}
    </ul>
    </>
  );
}

export default App;