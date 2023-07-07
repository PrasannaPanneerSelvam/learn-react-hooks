import styles from './useState.module.css';

import { useState } from 'react';
import { generateRandomHexColor } from '../../../utility/colors';

// ## Every component in React is nothing but just a function, which returns a JSX expression
// ## Mounting means addition of a component into the view tree, demounting stands for the removal

function UseState() {
  /**
   *
   * * useState will take one param to be with the state is initialized with
   *
   * * Return type : Array of two items
   *  1. Current state (Any value or a callback to be invoked only once during initialization)
   *  2. Callback to update the state
   *
   * The value passed for `useState` will be consumed and set to `isPowerOn` here, only during the mounting of this componenr
   * Rest of the times of this function execution, hook will retain the latest value for `isPowerOn`
   */

  const [isPowerOn, setIsPowerOn] = useState(false);

  /**
   * Here `generateRandomHexColor` is mocking a heavy computational function,
   * which should be run only once to initialize state
   */
  const [randomHexColor, setRandomHexColor] = useState(generateRandomHexColor);

  /**
   * ! Not to do
   * const [randomHexColor, setRandomHexColor] = useState(generateRandomHexColor());
   *
   * ## Way to store function using useState
   * const [functionInState, setFunctionInState] = useState(() => someFunction);
   */

  /**
   * Triggering `setRandomHexColor` or `setIsPowerOn` will lead to re-render of this component
   * ## Note: The re-render will happen after all the statements in this function (component) are been completed
   * i.e., The re-render will happen only once, irrespective number of times these `set` functions from useState hooks are been triggered
   */

  return (
    <div className={styles.inlineFlexVertical}>
      <button
        style={{
          backgroundColor: isPowerOn ? '#f1c40f' : '#888888',
        }}
        onClick={() => {
          // ## Here both will lead to same result
          // setIsPowerOn(!isPowerOn);
          setIsPowerOn((currentBoolean) => !currentBoolean);
        }}
      >
        {`Click me to ${isPowerOn ? 'Light down' : 'Light up'}`}
      </button>

      <div className={styles.flexHorizontal}>
        <button
          onClick={() => {
            // ## We can pass function to update the value too
            setRandomHexColor(generateRandomHexColor);
          }}
        >
          Generate new color
        </button>
        <div className={styles.colorText}>{randomHexColor}</div>
        <div
          className={styles.colorBox}
          style={{
            backgroundColor: randomHexColor,
          }}
        ></div>
      </div>
    </div>
  );
}

export default UseState;
