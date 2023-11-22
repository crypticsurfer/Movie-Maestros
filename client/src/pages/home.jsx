import { useQuery } from '@apollo/client';
// import Signup from './Signup';

// import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
//   const { loading, data } = useQuery(QUERY_THOUGHTS);
//   const thoughts = data?.thoughts || [];

  return (
    <div>
      {/* <h1>Home</h1> */}

      <div className='main-container'>
        <h1>Movie Maestros</h1>
        <input placeholder='Keywords'></input>
        <input placeholder='Actors'></input>
        <input placeholder='Genre'></input>
        <button>SEARCH</button>
      </div>

    </div>
  );
};

export default Home;
