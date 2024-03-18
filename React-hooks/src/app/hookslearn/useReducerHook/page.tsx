import BasicReducer from "./01-basic-example";

const Page = () => {
  const compoArr = [<BasicReducer />];
  return (
    <div className="min-h-screen">
      {compoArr.map((component) => {
        return (
          <div className="h-screen w-full flex justify-center items-center">
            {component}
          </div>
        );
      })}
    </div>
  );
};
export default Page;
