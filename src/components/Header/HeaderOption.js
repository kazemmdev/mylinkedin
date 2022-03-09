const HeaderOption = ({ title, Icon, active = false, onClick }) => {
  return (
    <div
      className={
        "group hidden sm:flex flex-auto max-w-xs relative justify-center transition-all duration-300 ease-in-out text-gray-500 hover:text-blue-500 cursor-pointer items-center space-x-2" +
        (active ? " text-blue-500" : "")
      }
      onClick={onClick}
    >
      {Icon && (
        <Icon
          className={
            "h-6 w-6 object-contain transition-all duration-300 ease-in-out stroke-slate-500 group-hover:stroke-blue-500" +
            (active ? " stroke-blue-500" : "")
          }
        />
      )}
      <h3 className="text-xs font-medium hidden lg:block">{title}</h3>
    </div>
  );
};

export default HeaderOption;
