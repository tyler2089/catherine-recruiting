import "../styles/animatedheader.css";

function animateHeader(word) {
  var arr = Array.from(word);
  var output = [];
  var count = 0;

  arr.forEach((letter) => {
    count % 2 === 0
      ? letter === " "
        ? output.push(
            <div
              className="animated-header-up"
              style={{ "--animation-duration": `${Math.random() * 2 + 0.25}s` }}
            >
              &nbsp;
            </div>
          )
        : output.push(
            <div
              className="animated-header-up"
              style={{ "--animation-duration": `${Math.random() * 2 + 0.25}s` }}
            >
              {letter}
            </div>
          )
      : letter === " "
      ? output.push(
          <div
            className="animated-header-down"
            style={{ "--animation-duration": `${Math.random() * 2 + 0.25}s` }}
          >
            &nbsp;
          </div>
        )
      : output.push(
          <div
            className="animated-header-down"
            style={{ "--animation-duration": `${Math.random() * 2 + 0.25}s` }}
          >
            {letter}
          </div>
        );
    count++;
  });

  return <div className="animated-header-container">{output}</div>;
}

export default animateHeader;
