import  {Scene} from "./src/Composition/Scene";

export default (SceneRenderer = (
  backgroundDataArray,
  characterDataArray,
  textboxDataArray,
  uiElements,
  styles,
  callback,
  nextLineCallback,
  errorCallback
) => {
  return Scene(...args)
});

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
