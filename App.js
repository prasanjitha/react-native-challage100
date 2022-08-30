import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, Button, Dimensions } from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text clicked!');
  console.log(Dimensions.get('screen'));
  const width = Dimensions.get('screen');


  return (
    <SafeAreaView style={styles.container}>
      {/* <Text onPress={handlePress}>Nirmal Prasnjitha!</Text>
      <TouchableOpacity onPress={() => console.log('Image pressed')}>
        <Image source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"
        }} />
      </TouchableOpacity>

      <Button color='orange' title='Clicked Me'
        onPress={() => alert('Button tapped')}
      />
      <StatusBar style="auto" /> */}
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "50%",
          height: width.height / 2


        }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
