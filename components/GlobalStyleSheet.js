import { Dimensions, StatusBar, StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 4,
    borderBottomWidth: 1,
    elevation: 1,
    marginHorizontal: "1%",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  cardSectionContainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
    position: 'relative'

  },
  cardSectionFooterStyle: {
    borderBottomWidth: 0,
  },  
  headerStyle: {
    marginTop: StatusBar.currentHeight || 0,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },

  listStyle: {
    flex: .8,
  },
  albumStyle: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleStyle: {
    flexGrow: 1,
    fontSize: 32,
    textAlign: 'center' 
  },
  cardTitleStyle: {
    fontSize: 16,
    textAlign: 'left',
  },
  cardInfoStyle: {
    fontSize: 12,
    textAlign: 'left',
  },
  thumbnailStyle: {
    width: Dimensions.get("window").width * 0.37,
    height: Dimensions.get("window").height * 0.2,
    borderRadius: 20,    
  },
  photoShowStyle: {
    
    width: Dimensions.get("window").width*.9,
    height: Dimensions.get("window").height*.6, 
    flexShrink: 1,
    

  },
  thumbnailContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    
  },
  fullContainerStyle: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginRight: 5,
    alignItems: 'center',
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }

});