import React, { useState, useEffect } from 'react';
import { Box, Button, Center, VStack, Alert, Progress, Skeleton, Spinner, Toast, useToast, Text } from 'native-base';

const ProfileScreen = () => {

  const [showAlert, setShowAlert] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const toast = useToast();

  useEffect(() => {
    // Simula la carga de datos del perfil de usuario
    const loadUserData = async () => {
      setLoading(true);
      setProgress(20);

      // Simulación de progreso
      setTimeout(() => setProgress(60), 1000);
      setTimeout(() => setProgress(100), 2000);

      setTimeout(() => {
        setUserData({
          name: "Daniel",
          email: "Daniel@example.com",
          bio: "Desarrollador de software apasionado por React Native y el desarrollo de aplicaciones móviles.",
        });
        setLoading(false);

        toast.show({
          title: "Datos cargados",
          description: "Los datos del usuario han sido cargados correctamente.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      
      }, 5000);
    };
    loadUserData();
  }, []);
  return (
    <Center flex={1} px={4}>
      <VStack space={4} w="100%">

        {/*Alerta de error */}
        {showAlert && (
          <Alert w="100" status="error" colorScheme="error"
            onClose={() => setShowAlert(false)}>
            <Alert.Icon /> {/Icono de error/}
            <Text color="error.700">Hubo un error al cargar los datos</Text>
          </Alert>
        )}
        
        {/* Simulación de carga de datos */}
        {loading ? (
          <>
            <Text>Cargando perfil del usuario...</Text>
            <Progress value={progress} colorScheme="blue" />
            <Skeleton.Text lines={3} mt={4} />
            <Skeleton mt={2} h="20" />
            <Skeleton mt={2} h="10" />
            <Spinner size="lg" color="blue.500" mt={4} />
          </>
        ) : (
          <>
  {/* Información de usuario */}
  <Box p={4} bg="white" rounded="lg" shadow={1} >
              <Text fontSize="xl" fontWeight="bold">{userData.name}</Text>
              <Text color="gray.500">{userData.email}</Text>
              <Text mt={2}>{userData.bio}</Text>
            </Box>
          </>
        )}
        <Button colorScheme="danger" onPress={() => setShowAlert(true)}>
              Simular el error
            </Button>
      </VStack>
    </Center>
  );
};

export default ProfileScreen;