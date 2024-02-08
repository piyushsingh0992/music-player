
const Routes = () => {
  const routes = ["Home", "Browse", "Radio"];
  return (
    <div className="  flex justify-start items-center">
      {routes.map((currentText: any) => {
        return (
          <p
            key={currentText}
            className=" pl-8  text-indigo-900  text-xs font-semibold cursor-pointer  flex items-center justify-center"
          >
            {currentText}
          </p>
        );
      })}
    </div>
  );
};



export default Routes 