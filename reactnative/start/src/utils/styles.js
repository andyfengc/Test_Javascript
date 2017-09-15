//way1
// const Styles = {
//   viewStyle: {
//     backgroundColor: '#F8F8F8'
//   },
//   textStyle: {
//     fontSize: 30
//   }
// };
//
// export default Styles;

// way2
export default class Styles {
  static headerView = {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  };
  static headerText = {
    fontSize: 20.5
  };
  static bodyText = {
    fontSize: 12
  }
}
