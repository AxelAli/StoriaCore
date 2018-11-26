import Typing from "react-typing-animation";

export const Textbox = props => {
  const { dialogue, style, element, type, nextLineCallback } = {
    ...defaultValues,
    ...props
  };
  switch (type) {
    case "basic":
      return (
        <div style={{ ...defaultStyles.textfield, ...style.textField }}>
          <div style={{ ...defaultStyles.title, ...style.title }}>
            {dialogue.name}
          </div>{" "}
          <div style={{ ...defaultStyles.body, ...style.body }}>
            <Typing
              hideCursor
              speed={dialogue.speed}
              onFinishedTyping={nextLineCallback}
            >
              {dialogue.steps.map(line => renderText(line))}
            </Typing>
          </div>
        </div>
      );

    case "element":
      return element;

    default:
      break;
  }
};

const renderText = line => {
  switch (line.type) {
    case "speed":
      return <Typing.Speed {...line.config} />;

    case "reset":
      return <Typing.Reset {...line.config} />;

    case "delay":
      return <Typing.Delay {...line.config} />;

    case "backspace":
      return <Typing.Backspace {...line.config} />;

    default:
      return <span>{line}</span>;
  }
};

export const defaultStyles = {
  textfield: {
    backgroundColor: "rgba(0,0,0,0.7)",
    height: "30vh",
    width: "100%",
    position: "absolute",
    bottom: 0,
    padding: "2%",
    fontFamily: "Helvetica",
    fontSize: "5vh",
    color: "white"
  },
  title: { textAlign: "center" }
};

const defaultValues = {
  dialogue: null,
  style: { textField: {} },
  element: null,
  type: null,
  nextLineCallback: null
};
