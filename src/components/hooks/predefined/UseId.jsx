import { useId } from 'react';

// Following example is copied from `https://react.dev/reference/react/useId`
function UseId() {
  /**
   * * `useId` takes zero arguments and returns an unique id
   *
   * Since the ids are unique these can be used as id for DOM nodes and can be bind accordingly
   * This will ensure same ids are matching during SSR & CSR until there is no difference
   * between component tree on server machine & client machine
   *
   */
  const id = useId();
  return (
    <form>
      <label htmlFor={id + '-firstName'}>First Name: </label>
      <input id={id + '-firstName'} type="text" />
      <div></div>
      <label htmlFor={id + '-lastName'}>Last Name: </label>
      <input id={id + '-lastName'} type="text" />
    </form>
  );
}

export default UseId;
