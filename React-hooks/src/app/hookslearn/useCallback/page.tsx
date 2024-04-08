import BasicCallback from "./basicCallback";
//Basically the useCallback hook is used to cache the function definition anf the dependency array which we provide is going to affect the remaking of the function
const Page = () => {
  const componentArr = [<BasicCallback />];
  return <div className="">Page</div>;
};
export default Page;
