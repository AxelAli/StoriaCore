import Background from './Composition/Background';
import Character from './Composition/Character';
import Textbox from './UI/Textbox';

export const Scene = (
  backgroundDataArray,
  characterDataArray,
  textboxDataArray,
  uiElements,
  sceneStyles,
  callback,
  nextLineCallback,
  errorCallback,
) => (
  <div style={{ ...sceneStyles }}>
    {backgroundDataArray.map(backgroundData =>
      Background(backgroundData, callback),
    )}
    {characterDataArray.map((characterData, index) =>
      Character({
        ...characterData,
        position: (100 / (characterDataArray.length + 1)) * (index + 1),
      }),
    )}
    {textboxDataArray.map(textboxData =>
      Textbox(textboxData, callback, nextLineCallback, errorCallback),
    )}
  </div>
);
