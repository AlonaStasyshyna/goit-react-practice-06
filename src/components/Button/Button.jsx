export const Button = ({ text, clickHandler, type }) => {
  return (
    <button type={type} onClick={clickHandler}>
      {text}
    </button>
  );
};
