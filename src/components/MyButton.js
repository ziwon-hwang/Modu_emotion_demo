const MyButton = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type)
    ? type
    : type === undefined
    ? "default"
    : type;
  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};
export default MyButton;
