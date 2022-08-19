const Mosimi = ({ type, src }) => {
  return (
    <div>
      <img className={["Mosimi", `Mosimi_${type}`].join(" ")} src={src}></img>
    </div>
  );
};
export default Mosimi;
