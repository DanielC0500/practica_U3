import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Box, Heading, Input, Stack, Divider, FormControl, Icon, Pressable, Radio, Select, CheckIcon, Center, HStack, Checkbox, Link, Button,VStack,ScrollView } from "native-base";

function RegisterScreen() {
  const [show, setShow] = React.useState(false);
  const [value, setValue] = React.useState("Hombre");
  const [service, setService] = React.useState("");
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <ScrollView w="100%">
      <Center flex={1}>
        <Box safeArea w="90%" maxW="290" py="8">
          <VStack space={3} mt="5">
            <Heading 
              size="lg" 
              fontWeight="600" 
              color="coolGray.800" 
              _dark={{ color: "warmGray.50" }}
            >
              Register
            </Heading>
            <FormControl isRequired>
              <VStack space={4}>
                <Input variant="outline" placeholder="Nombre" />
                <Input variant="outline" placeholder="Apellido" />
                <Input variant="outline" placeholder="Email" />
                <Input
                  type={show ? "text" : "password"}
                  InputRightElement={
                    <Pressable onPress={() => setShow(!show)}>
                      <Icon 
                        as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} 
                        size={5} 
                        mr="2" 
                        color="muted.400" 
                      />
                    </Pressable>
                  }
                  placeholder="Password"
                />
                <FormControl.HelperText>
                  Minimo 8 caracteres.
                </FormControl.HelperText>
              </VStack>
            </FormControl>
            <Divider/>

            <FormControl isRequired mt="4">
            <FormControl.Label>Género</FormControl.Label>
              <Radio.Group 
                name="myRadioGroup" 
                accessibilityLabel="Seleccionar género" 
                value={value} 
                onChange={setValue}
              >
                <VStack space={2}>
                  <Radio value="Hombre">Hombre</Radio>
                  <Radio value="Mujer">Mujer</Radio>
                  <Radio value="Tanque">Tanque Sovietico T90 con blindaje reactivo</Radio>
                  <Radio value="Gey" isDisabled>Gey</Radio>
                </VStack>
              </Radio.Group>
            </FormControl>
            <Divider/>

            <FormControl isRequired mt="4">
              <FormControl.Label>Carrera</FormControl.Label>
              <Select
                selectedValue={service}
                accessibilityLabel="Selecciona Tu Carrera"
                placeholder="Selecciona Tu Carrera"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size={5} />
                }}
                onValueChange={setService}
              >
                <Select.Item label="Ingenieria en Tics" value="tics" />
                <Select.Item label="Ingenieria en Electronica" value="electronica" />
                <Select.Item label="Ingenieria en Gestion Empresarial" value="gestion" />
                <Select.Item label="Ingenieria Industrial" value="industrial" />
                <Select.Item label="Licenciatura Administracion de Empresas" value="admin" />
              </Select>
            </FormControl>
            <HStack space={2} mt="5" alignItems="center">
              <Checkbox 
                value="accept" 
                accessibilityLabel="Acepto los términos y condiciones"
                onChange={setIsChecked}
              >
                I accept the
              </Checkbox>
              <Link href="https://es.wikipedia.org/wiki/T-90" isExternal>
                terms & conditions
              </Link>
            </HStack>

            <Button 
              mt="5" 
              mb="5"
              colorScheme="indigo"
              onPress={() => {
                console.log("Registro presionado", {
                  genero: value,
                  carrera: service,
                  aceptoTerminos: isChecked
                });
              }}
            >
     Register
            </Button>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
}

export default RegisterScreen;