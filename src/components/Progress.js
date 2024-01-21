function Progress({
  index,
  numQuestions,

  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <div
      className="main-progress"
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   width: "100%",
      // }}
    >
      <header className="progress">
        <progress max={numQuestions} value={index + Number(answer !== null)} />

        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>

        <p>
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </header>
    </div>
  );
}
export default Progress;
