import React from "react";
import { Button, View, Text } from "react-native";

const CantScreen = () => {
    return (
        <View>
            <Text>What we cannot do to help your organization...</Text>
            <Text>
                This is a thing we can do.
            </Text>
            <Text>
                This is a thing we can do.
            </Text>
            <Text>
                This is a thing we can also do.
            </Text>
            <Button 
                title="Next"
                onPress
            />
        </View>
    );
}

export default CantScreen;