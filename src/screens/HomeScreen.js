import { Button, View } from "react-native";

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title='Go to Notifications'
            />
            <Button
                onPress={() => navigation.navigate('Doctors')}
                title='Go to Doctors'
            />
            <Button
                onPress={() => navigation.navigate('Orders')}
                title='Go to Orders'
            />
        </View>
    );
}

export default HomeScreen;