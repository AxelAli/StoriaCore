export const Background = (props, callback) => {
  const { url, style, type, element } = props;
  switch (type) {
    case 'image':
      return (
        <div
          style={{
            ...defaultStyles.image,
            ...style,
            backgroundImage: `url(${url})`,
          }}
        />
      );

    case 'video':
      return (
        <video
          autoPlay
          style={{ ...defaultStyles.video, ...style }}
          onEnded={callback}
        >
          <source src={url} />
        </video>
      );

    case 'element':
      return element;

    default:
      break;
  }
};

const defaultStyles = {
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    overflow: 'hidden',
    backgroundPosition: 'center center',
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
