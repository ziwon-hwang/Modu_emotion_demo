const Text = ({ text, textType, onClick }) => {
  return (
    <div className={["Text", `${textType}`].join(" ")} onClick={onClick}>
      {text}
    </div>
  );
};

Text.defaultProps = {
  text: " ",
};
export default Text;
