import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 1,
    width: 450,
    backgroundColor: 'white',
  },
  image: {
    width: 80,
    height: 120,
    marginVertical: 10,
  },
  titleBlock: {
    flexDirection: 'column',
    flex: 4,
  },
  plusIcon: {
    marginTop: 30,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    marginTop: 20,
    flexShrink: 1,
    marginRight: 20,
    marginLeft: -5,
  },
  subHeader: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '200',
    marginVertical: 2,
    marginLeft: -5,
  },
  headerblock: {
    height: height - 0.85 * height,
    width: width,
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  headertitle: {
    fontSize: 20,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    marginTop: 20,
    marginLeft: 50,
  },
  headerSubTitle: {
    fontSize: 25,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    marginVertical: 2,
    marginLeft: 50,
  },
  icnblock: {
    flex: 2,
  },
  plusBlock: {
    flex: 1.95,
  },
  deleteIcon: {
    marginTop: 2,
  },
  amtBlock: {
    marginTop: 30,
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '200',
    marginVertical: 2,
    marginLeft:-13,
    color: 'grey',
    width: width,
  },
  box: {
    width: '80%',
    height: '30%',
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black',
    bottom: '16%',
  },
  txtStyle: {
    fontFamily: 'Lato',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 2.95,
    color: 'white',
  },
  buyModalStyle: {
    width: width - 0.05 * width,
    backgroundColor: 'grey',
    height: height - 0.8 * height,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    bottom:0,
    marginLeft: 10,
    overflow:'visible',
    zIndex:2000
  },
});
export default styles;
