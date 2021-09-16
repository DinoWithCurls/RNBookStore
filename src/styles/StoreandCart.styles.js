import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 1,
    width: 450,
    backgroundColor:'white'
  },
  image: {
    width: 80,
    height: 120,
    marginVertical: 10,
  },
  titleBlock: {
    flexDirection: 'column',
    flex: 5,
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
    height: height - 0.85*height,
    width: width,
    flex:1,
    flexWrap:'wrap',
    backgroundColor:'white'
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
    flex: 1.9,
  },
  deleteIcon:{
    marginTop:2
  },
  amtBlock:{
    marginTop:30,
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '200',
    marginVertical: 2,
    marginLeft: -5,
    color:'grey',
    width: width
  },
  box: {
    width: 326,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black',
    marginTop: 50,
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
});
export default styles
