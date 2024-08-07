import Options from "./Options";

function Question({ question, dispatch, answer }) {
  // console.log(question);
  return (
    <div>
      <span className="question-span">
        <h4>{question.question}</h4>
      </span>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
