import React, { useState, useEffect } from 'react';
import { Box, Button, Center, VStack, Alert, Progress, Skeleton, Spinner, useToast, Text } from 'native-base';

const ProfileScreen = () => {

  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

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
          name: "Angel",
          email: "Angel@example.com",
          bio: "Desarrollador de software apasionado por React Native y el desarrollo de aplicaciones móviles.",
        });
        setLoading(false);
      
      }, 3000);
    };

    loadUserData();
  }, []);

  return (
    <Center flex={1} px={4}>
      <VStack space={4} w="100%">
        
      

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
      <Box p={4} bg="white" rounded="lg" shadow={1}>
        <Text fontSize="xl" fontWeight="bold">{userData.name}</Text>
        <Text color="gray.500">{userData.email}</Text>
        <Text mt={2}>{userData.bio}</Text>
      </Box>
    
    </>
  )}
</VStack>
</Center>
);
};

export default ProfileScreen;