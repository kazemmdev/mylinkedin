import "./HeaderOption.css";

const HeaderOption = ({ title, Icon, active = false, onClick }) => {
  return (
    <div
      className={"headerOption" + (active ? " active" : "")}
      onClick={onClick}
    >
      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
