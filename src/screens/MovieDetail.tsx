import { View, Text, Button } from "react-native";

import React from "react";

const MovieDetail = ({navigator}: any) => {
    return(
        <View>
            <Text>Movie Detail</Text>
            <Button title="Go back" onPress={()=> navigator.goBack()} />

        </View>
    )
}

export default MovieDetail;