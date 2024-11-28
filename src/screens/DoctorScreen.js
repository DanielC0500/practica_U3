import { Button,View } from "react-native";

function DoctorScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Home" onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
}

export default DoctorScreen;
