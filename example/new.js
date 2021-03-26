//         <View style={styles.container}>
//             <View style={styles.row1}>
//                 <Text style={styles.name} >A</Text>
//                 <Text style={styles.name} >Malik Ibrahim</Text>
//             </View>
//             <View style={styles.box} >
//                 <View style={styles.cont1}>
//                     <View style={styles.row2}>
//                         <Text style={styles.letter}>Apple</Text>
//                         <View style={styles.letters}>
//                             <Text style={styles.letter1}>You're offline</Text>
//                             <Text style={styles.letter2}>Check your connection and</Text>
//                         </View>  
//                     </View>
//                     <View style={styles.divider}>
//                     </View>
//                     <View style={styles.tryRow}>
//                         <Text style={styles.retry}>O</Text>
//                         <Text style={styles.try}>Try again</Text>

//                     </View>
//                 </View>
//             </View>
//         </View>
//     )
// }


// const styles = StyleSheet.create ({
//     try: {
//         color: 'grey',
//     },
//     retry: {
//         fontSize: 25,
//         marginRight: 15,
//         marginLeft: 15,
//     },
//     tryRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginTop: 5
//     },
//     divider: {
//         width: '100%',
//         height: 1,
//         backgroundColor: 'grey',
//         marginTop: 18,
//     },
//     letter2: {
//         color: 'grey',
//     },
//     letter: {
//         fontSize: 25,
//         color: 'purple',
//         marginRight: 15
//     },
//     row2: {
//         flexDirection: 'row',
//         paddingHorizontal: 10,
//         alignItems: 'center',
//     },
//     cont1: {
//         backgroundColor: 'white',
//         width: '100%',
//         // height: 100,
//         paddingVertical:10,
//         borderRadius: 5
//     },
//     row1: {
//         flexDirection: 'row'
//     },
//     box:{
//         width:'100%',
//         backgroundColor:'grey',
//         flex:1,
//         paddingHorizontal: 17,
//         paddingTop:17
//     },
//     name:{
//         color:'white',
//         marginLeft:15,
//         fontSize:18,
//         marginBottom:20
//     },
//     container: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight,
//         backgroundColor:'skyblue',
//         paddingTop:10
//     },

// });

//  export default function New() {
//      return(
//          <ScrollView style={styles.container} contentContainerStyle={styles.content} >
//              <View style={styles.topBox}>
//                 <Text style={styles.heading}>Coloured Buttons</Text>
//              </View>
//              <Text style={styles.firstWord}>Primary Coloured</Text>
//              <View style={styles.firstButton}>
//                 <Text style={styles.firstText}>PRIMARY COLOURED BUTTON STYLE</Text>
//              </View>
//              <View style={styles.divider1}></View>
//              <Text style={styles.secondWord}>Primary Coloured Button With Icon at Start</Text>
//              <View style={styles.secondButton}>
//                 <Text style={styles.firstText}>PRIMARY COLOURED BUTTON</Text>
//              </View>
//              <View style={styles.divider1}></View>
//              <Text style={styles.secondWord}>Primary Coloured Button With Icon at End</Text>
//              <View style={styles.thirdButton}>
//                 <Text style={styles.firstText}>PRIMARY COLOURED BUTTON EXTRA</Text>
//              </View>
//              <View style={styles.divider1}></View>
//              <Text style={styles.secondWord}>Primary Dark Coloured</Text>
//              <View style={styles.fourthButton}>
//                 <Text style={styles.firstText}>PRIMARY DARK BUTTON</Text>
//              </View>
//              <View style={styles.divider1}></View>
//              <Text style={styles.secondWord}>Accent Coloured Button</Text>
//              <View style={styles.lastButton}>
//                 <Text style={styles.firstText}>COLOUR ACCENT BUTTON</Text>
//              </View>
//              <View style={styles.divider1}></View>
//          </ScrollView>

//      )
//  }

//  const styles = StyleSheet.create ({
//      container: {
//          flex: 1,
//      },
//      content:{
//          paddingBottom:70,
//      },
//      topBox: {
//          height: '12%',
//          backgroundColor: 'black',
//          alignItems: 'center',
//          justifyContent: 'center',
//      },
//      heading: {
//          color: 'white',
//          fontSize: 20,
//      },
//      firstWord: {
//         //  justifyContent: 'center',
//          alignSelf: 'center',
//          fontSize: 15,
//          marginTop: 10,
//      },
//      firstButton: {
//          width: '85%',
//          backgroundColor: 'green',
//          height: 45,
//          borderRadius: 3,
//          alignSelf: 'center',
//          marginTop: 20,
//          alignItems: 'center',
//          justifyContent: 'center',
//      },
//      firstText: {
//          color: 'white',
//          fontSize: 16,
//      },
//      divider1: {
//          width: '90%',
//          height: 1,
//          backgroundColor: 'black',
//          alignSelf: 'center',
//          marginTop: 15,
//      },
//      secondWord: {
//         alignSelf: 'center',
//         fontSize: 15,
//         marginTop: 20,
//      },
//      secondButton: {
//         width: '70%',
//         backgroundColor: 'green',
//         height: 45,
//         borderRadius: 3,
//         alignSelf: 'center',
//         marginTop: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//      },
//      thirdButton: {
//         width: '85%',
//         backgroundColor: 'green',
//         height: 45,
//         borderRadius: 3,
//         alignSelf: 'center',
//         marginTop: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     fourthButton: {
//         width: '65%',
//         backgroundColor: 'green',
//         height: 45,
//         borderRadius: 3,
//         alignSelf: 'center',
//         marginTop: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     lastButton: {
//         width: '65%',
//         backgroundColor: 'orange',
//         height: 45,
//         borderRadius: 3,
//         alignSelf: 'center',
//         marginTop: 20,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//  });


//     return(
//         <View style={styles.container}>
//             <TouchableOpacity style={styles.firstBox}>
//                  <Text style={styles.light}>Show Light Confirmation Dialogue</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.secondBox}>
//                  <Text style={styles.dark}>Show Dark Confirmation Dialogue</Text>
//            </TouchableOpacity> 

//         </View>
//     )
//  }

//  const styles = StyleSheet.create ({
//      container: {
//          flex: 1,
//          backgroundColor: 'grey',
//          alignItems: 'center',
//          justifyContent: 'center',
//      },
//      firstBox: {
//          width: '90%',
//          height: 40,
//          backgroundColor: 'skyblue',
//          borderRadius: 4,
//          marginBottom: 50,
//          alignItems: 'center',
//          justifyContent: 'center',
//      },
//      secondBox: {
//         width: '90%',
//         height: 40,
//         backgroundColor: 'skyblue',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 4,
//      },

//  });
//     const showAlert = ()=>{
//         alert('Use location service?  Let us help apps determine location. This means sending anonymous location data to us, even when no apps are running.')
//     }
//     const showAlert1 = ()=>{
//         alert('Use location service?')
//     }
//     const showAlert2 = ()=>{
//         alert('Use location service?')
//     }
//      return(
//         <View style={styles.container}>
//             <TouchableOpacity onPress={showAlert} style={styles.firstBox}>
//                 <Text style={styles.map}>Show Map Permissions</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={showAlert1} style={styles.secondBox}>
//                 <Text style={styles.custom}>Show Custom Map Permissions</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={showAlert2} style={styles.thirdBox}>
//                 <Text style={styles.dark}>Show Dark Map Permissions</Text>
//             </TouchableOpacity >    
//         </View>
//      );
    
// }

// const styles = StyleSheet.create ({
//     container: {
//         flex: 1,
//         backgroundColor: 'skyblue',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// firstBox: {
//     backgroundColor: 'white',
//     width: '90%',
//     height: 40,
//     alignSelf: 'center',
//     borderRadius: 3,
//     alignItems: 'center',
//     justifyContent: 'center',
// },
// secondBox: {
//     backgroundColor: 'white',
//     width: '90%',
//     height: 40,
//     alignSelf: 'center',
//     borderRadius: 3,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 30,
// },
// thirdBox: {
//     backgroundColor: 'white',
//     width: '90%',
//     height: 40,
//     alignSelf: 'center',
//     borderRadius: 3,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 30,
// },
// });