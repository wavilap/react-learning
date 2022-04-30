import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Counter({
  initialCount,
  maxNumber = 100,
}) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(initialCount);
  }, [initialCount]);

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleIncrement = () => {
    if (counter <= maxNumber) {
      setCounter(counter + 1);
    }
  };

  return (
    <div>
      <button
        type="button"
        disabled={counter <= 1}
        onClick={handleDecrement}
      >
        DECREMENTAR
      </button>

      <span>{counter}</span>

      <button
        disabled={counter >= maxNumber}
        type="button"
        onClick={handleIncrement}
      >
          INCREMENTAR
      </button>
    </div>
  );
}

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
  maxNumber: PropTypes.number,
};

// Counter.defaultProps = {
//   maxNumber: 100,
// };

export default Counter;