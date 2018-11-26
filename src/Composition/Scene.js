import { Background } from "./Background";
import { Character } from "./Character";
import { Textbox } from "../UI/Textbox";

export const Scene = props => {
  const {
    backgrounds,
    characters,
    textboxes,
    uiElements,
    sceneStyles,
    callback,
    nextLineCallback,
    errorCallback
  } = { ...defaultValues, ...props };
  return (
    <div style={{  ...defaultStyles.main ,...sceneStyles }}>
      {backgrounds.map(backgroundData => (
        <Background {...backgroundData} callback={callback} />
      ))}
      <div style={{ ...defaultStyles.CharacterContainer }}>
        {characters.map((characterData, index) => (
          <Character
            {...characterData}
            position={(100 / (characters.length + 1)) * (index + 1)}
            callback={callback}
          />
        ))}
      </div>
      {textboxes.map(textboxData =>
        <Textbox {...textboxData}  nextLineCallback={()=>{}} errorCallback/>
      )}
    </div>
  );
};

const defaultValues = {
  backgrounds: [],
  characters: [],
  textboxes: [],
  uiElements: [],
  sceneStyles: {},
  callback: null,
  nextLineCallback: null,
  errorCallback: null,
};

const defaultStyles = {
  CharacterContainer: {
    height: "100vh",
    width: "100vw",
    display: "inline-flex"
  },
  main: {
    overflow: "hidden",
    minHeight: "100vh",
    minWidth: "100vw"
  }
};
