import colors from './colors';

export default {
  colors,
  Text: {
    h1Style: {
      color: colors.darkGray,
      fontSize: 36,
      fontWeight: 'normal',
    }
  },
  Button: {
    buttonStyle: {
      borderRadius: 0,
    }
  },
  Input: {
    containerStyle: {
      position: 'relative',
      width: '106%',
    },
    inputContainerStyle: {
      borderRadius: 0,
      borderWidth: 1,
      borderColor: '#C5C5C5',
      width: '100%',
    },
    inputStyle: {
      paddingTop: 10,
      paddingHorizontal: 10,
      height: 50,
      fontSize: 15,
    },
    labelStyle: {
      color: '#BEBEBE',
      fontSize: 12,
      fontWeight: 'normal',
      position: 'absolute',
      top: 5,
      left: 21
    }
  }
};