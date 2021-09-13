import {StyleSheet} from 'react-native';

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
    height: 120,
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
    flex: 1.5,
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
    color:'grey'
  },
});
export default styles
