import styles from './useEffect.module.css';

import { useEffect, useState } from 'react';

const cacheKey = 'useEffectHookPreviousValue';

function UseEffect() {
  const [inputValue, setInputValue] = useState(null);

  /**
   * * useEffect will take two params
   *  i. callback to be invoked based on dependency array
   *  ii. Dependency array (optional)
   *
   * * Return type : void
   *
   * Callback will be invoked
   *  i. During mounting of the component
   *  ii. When any value from dependency array being altered
   *  iii. Always (on all re-renders) when no dependency array is passed
   *
   * Callback being passed can be impure & can contact with any external resource and
   * it can optionally return a function that can clear up some Effects done useEffect.
   * Say, there is an addition of a timeOut, which need to be cleared once the component is removed.
   * The following represents such a use case as example
   *
   * * useEffect(() => {
   * *  const timeOutId = setTimeout(() => { .... }, 1000);
   * *  return () => clearTimeout(timeOutId)
   * * }, [])
   */

  useEffect(() => {
    try {
      const cachedValue = window.localStorage.getItem(cacheKey);
      if (cachedValue != null) setInputValue(cachedValue);
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (inputValue != null) {
      window.localStorage.setItem(cacheKey, inputValue);
    }
  }, [inputValue]);

  /**
   * ! Dont call state update functions inside useEffect without dependency array or array with the element being updated itself
   *  Example :
   *
   * Without dependency array
   * * useEffect(() => {
   * *  setInputValue('')
   * * })
   *
   * With the element being updated itself
   * * useEffect(() => {
   * *   setInputValue('')
   * * }, [inputValue, ...])
   *
   * ## Any of the above two will lead to indefinite loop of re-renders
   *
   */

  return (
    <div className={styles.inlineFlexVertical}>
      <div>Type something to be stored & refresh the page</div>
      <input
        value={inputValue ?? ''}
        onChange={(e) => {
          const newValue = e.target.value;
          setInputValue(newValue);
        }}
      ></input>
    </div>
  );
}

export default UseEffect;
