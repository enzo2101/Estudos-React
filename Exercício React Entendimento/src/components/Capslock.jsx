const Capslock = ({ text }) => {
  function turnCarpslock() {
    let textCapslock = text.toUpperCase();
    return textCapslock
  }

  return <div>{turnCarpslock}</div>;
};

export default Capslock;
