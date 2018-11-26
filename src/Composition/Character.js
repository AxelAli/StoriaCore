export const Character = props => {
  const { url, style, element, type, invertX, height, position } = {...defaultStyles,...props};
  switch (type) {
    case 'image':
      return (
        <div
          style={{
            ...defaultStyles.imageContainer,
            left: `${position}%`,
            transform: invertX ? 'scaleX(-1)' : null,
          }}
        >
          <img
            style={{
              ...style,
              ...defaultStyles.image,
              top: height ? 100 - height + '%':0,
              height: height? height + '%':'100%',
            }}
            src={url}
          />
        </div>
      );

    case 'element':
      return element;

    default:
      break;
  }
};

const defaultStyles = {
  image: {
    transform: 'translateX(-50%)',
    position: 'relative',
  },
  imageContainer: {
    height: '100%',
    width: 1,
    position: 'relative',
    transition: 'all .5s ease-out',
  },
  video: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    minHeight: '100%',
    overflow: 'hidden',
  },
};
