import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { login } from '../app/auth/actions';
import Login from '../components/Login';

const Index = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  useEffect(() => {
    dispatch(login('admin', '147258369'));
  }, [dispatch]);

  return (
    <div>
      <Login />
      <nav>
        <Link href='/counter'>
          <a>Counter</a>
        </Link>
      </nav>

      <h1>Redux Sagas</h1>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
        }}
      >
        Increase
      </button>
      <h1>{count}</h1>
      {/* <Page title='Index Page' linkTo='/other' NavigateTo='Other Page' /> */}
    </div>
  );
};

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   if (!store.getState().placeholderData) {
//     store.dispatch(login('admin', '147258369'));
//     store.dispatch(END);
//   }

//   await store.sagaTask.toPromise();
// });

export default Index;
