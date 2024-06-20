import React from 'react'
import { View, Text,Button } from 'react-native'

const Home = ({ navigation }: any) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to movie detail"
        onPress={() => navigation.navigate("MovieDetail")}
      />
    </View>
  );
};

export default Home;