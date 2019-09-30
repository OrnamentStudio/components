import { createContext } from 'react';


const MetaContext = createContext({
  addProps() {
    console.error('Please use MicroHelmet Provider');
  },
});

export default MetaContext;
export const { Provider, Consumer } = MetaContext;
