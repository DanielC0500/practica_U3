import React, { useState } from 'react';
import { Text, Image } from 'react-native';
import { Box, Heading, VStack, FormControl, HStack, Input, Button, Link, Center, useColorModeValue, useBreakpointValue } from "native-base";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const bgColor = useColorModeValue('light.background.50', 'dark.background.900');
    const textColor = useColorModeValue('light.text.50', 'dark.text.50');
    const linkColor = useColorModeValue("indigo.500", "indigo.300"); 

    const flexDir = useBreakpointValue({ base: 'column', lg: 'row' });

    const handleLogin = () => {
        console.log('Login button pressed'); // Verifica que la función se esté llamando
        console.log('Email:', email, 'Password:', password); // Verifica los valores de email y password
        if (email && password) { 
            setIsAuthenticated(true);
            console.log('Authenticated:', true);
            navigation.navigate('MainTab'); // Redirige a 'Home' después de iniciar sesión
        } else {
            alert('Please enter your credentials');
        }
    };

    return (
        <Center w="100%" bg={bgColor} flex={1}>
            <Image 
                source={require('../../assets/icon.png')} // Asegúrate de que esta ruta sea correcta
                style={{ width: '100%', height: 200, marginBottom: 20 }} 
                resizeMode="contain"
            />
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color={textColor}>
                    Welcome
                </Heading>
                <Heading mt="1" color={textColor} fontWeight="medium" size="xs">
                    Sign in to continue!
                </Heading>

                <VStack space={3} mt="5" flexDirection={flexDir}>
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input value={email} onChangeText={setEmail} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" value={password} onChangeText={setPassword} />
                        <Link _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: linkColor 
                        }} alignSelf="flex-end" mt="1">
                            Forget Password?
                        </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="indigo" onPress={handleLogin}>
                        Login
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color={textColor}>
                            I'm a new user. 
                            <Button
                                variant="link"
                                colorScheme="indigo"
                                onPress={() => navigation.navigate('Register')}> 
                                Register
                            </Button>
                        </Text>
                    </HStack>
                    </VStack>
            </Box>
        </Center>
    );
};

export default LoginScreen;