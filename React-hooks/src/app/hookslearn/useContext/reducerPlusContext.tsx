import { ContextProvider } from "@/app/ui/useContextUi/contextWithReducer";
import Counter from "@/app/ui/useContextUi/counter";
import InputField from "@/app/ui/useContextUi/inputField";

const ReducerPlusContext = () => {
  return (
    <div className="h-[500px] w-[400px] bg-pink-500 p-2 flex gap-4 flex-col rounded-xl ">
      <ContextProvider>
        <>
          <Counter />
          <InputField />
        </>
      </ContextProvider>
    </div>
  );
};
export default ReducerPlusContext;
