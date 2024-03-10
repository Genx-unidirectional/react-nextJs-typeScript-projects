"use client";

import { FormEvent, MutableRefObject, useRef, useState } from "react";

const quizQuestions = [
  ["who is famous in marvel", "Tony"],
  ["best superman", "henry cavil"],
  ["best enemy ", "thanos"],
];
const QuizApp = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [quiz, setQuiz] = useState(quizQuestions[0]);
  const [checker, setChecker] = useState(false);

  const ansCheck = (answer: string) => {
    if (answer === quiz[1]) {
      setCount((prev) => prev + 1);
      setSuccess(true);
      setChecker(false);
    } else {
      setChecker(true);
    }
  };
  function handleNext() {
    if (quizQuestions[count] === undefined) {
      return;
    }
    setSuccess(false);
    setQuiz(quizQuestions[count]);
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const answer = formData.get("answer");
    if (answer) {
      ansCheck(answer as string);
    }
  };
  // const getUser =
  return (
    <div className="bg-white text-black w-[450px] h-[300px] rounded-lg flex flex-col p-4 relative">
      {!success ? (
        <div className="p-2 h-[50%] bg-slate-50 rounded-lg flex justify-center items-center">
          <h2 className="text-black  text-3xl font-medium">{quiz[0]}</h2>
        </div>
      ) : (
        <div className="p-2 h-[50%] bg-slate-50 rounded-lg flex flex-col gap-2 justify-center items-center">
          <h2 className="text-green-500 text-2xl font-medium">
            right answer click for next
          </h2>
          <button
            className="bg-black text-white  px-2 rounded-lg text-xl"
            onClick={() => handleNext()}
          >
            Next{" "}
          </button>
        </div>
      )}
      {success ? (
        <>
          <h2 className="font-bold text-2xl text-center absolute bottom-12 left-[36%]">
            That's right
          </h2>
        </>
      ) : (
        <Form handleSubmit={handleSubmit} checker={checker} />
      )}
    </div>
  );
};
export default QuizApp;

function Form({
  handleSubmit,
  checker,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  checker: boolean;
}) {
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-left gap-2 absolute bottom-8 left-4 "
      >
        <label htmlFor="answer" className="font-medium text-xl">
          Answer
        </label>
        <input
          className="bg-white p-1 rounded-lg border-black border border-solid"
          type="text"
          name="answer"
        />

        <button className="bg-white border py-1 text-xl font-medium active:bg-slate-400 hover:bg-black transition-all duration-500 hover:text-white text-black w-1/2 rounded-lg">
          Submit
        </button>
      </form>
      {checker ? (
        <p className="text-xl font-bold absolute bottom-14 right-4 text-red-500  ">
          Wrong answer
        </p>
      ) : null}
    </>
  );
}
