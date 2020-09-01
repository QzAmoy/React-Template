import ReactLoadable from 'react-loadable';
import Loading from '@components/Loading';

const Loadable = (component) => {
  return ReactLoadable({
    loader: component,
    loading: Loading,
  });
};
export default Loadable;
