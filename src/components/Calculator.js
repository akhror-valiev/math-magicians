import './calculator.css';
import '../logic/operate';
import PropTypes from 'prop-types';

const Calculator = (props) => {
  const { calcStates, handleClick } = props;
  const { total, next } = calcStates;
  let val = 0;
  if (next) {
    val = next;
  } else if (total) {
    val = total;
  }

  return (
    <div className="main-container">
      <input
        className="grid-container display"
        placeholder="0"
        value={val}
        readOnly
      />
      <button type="button" className="grid-container AC" onClick={handleClick}>
        AC
      </button>
      <button
        type="button"
        className="grid-container operations"
        onClick={handleClick}
      >
        +/-
      </button>
      <button
        type="button"
        className="grid-container procentage"
        onClick={handleClick}
      >
        %
      </button>
      <button
        type="button"
        className="grid-container divide operation"
        onClick={handleClick}
      >
        ÷
      </button>
      <button type="button" className="grid-container seven" onClick={handleClick}>
        7
      </button>
      <button type="button" className="grid-container eight" onClick={handleClick}>
        8
      </button>
      <button type="button" className="grid-container nine" onClick={handleClick}>
        9
      </button>
      <button
        type="button"
        className="grid-container multiply operation"
        onClick={handleClick}
      >
        x
      </button>
      <button type="button" className="grid-container four" onClick={handleClick}>
        4
      </button>
      <button type="button" className="grid-container five" onClick={handleClick}>
        5
      </button>
      <button type="button" className="grid-container six" onClick={handleClick}>
        6
      </button>
      <button
        type="button"
        className="grid-container minus operation"
        onClick={handleClick}
      >
        -
      </button>
      <button type="button" className="grid-container one" onClick={handleClick}>
        1
      </button>
      <button type="button" className="grid-container two" onClick={handleClick}>
        2
      </button>
      <button type="button" className="grid-container three" onClick={handleClick}>
        3
      </button>
      <button
        type="button"
        className="grid-container plus operation"
        onClick={handleClick}
      >
        +
      </button>
      <button type="button" className="grid-container zero" onClick={handleClick}>
        0
      </button>
      <button type="button" className="grid-container period" onClick={handleClick}>
        .
      </button>
      <button
        type="button"
        className="grid-container equal operation"
        onClick={handleClick}
      >
        =
      </button>
    </div>
  );
};

Calculator.propTypes = {
  calcStates: PropTypes.instanceOf(Object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Calculator;
