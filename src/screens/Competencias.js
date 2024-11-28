import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Button, ScrollView, SectionList, FlatList } from 'react-native';

const Competencias = () => {
  const [isStatusBarHidden, setIsStatusBarHidden] = useState(false);

  const toggleStatusBar = () => {
    setIsStatusBarHidden(!isStatusBarHidden);
  };

  const sections = [
    {
      title: 'Habilidades',
      data: [
        'Resolución de problemas',
        'Trabajo en equipo',
        'Pensamiento crítico',
        'Gestión del tiempo',
        'Adaptabilidad',
      ],
    },
    {
      title: 'Conocimientos',
      data: [
        'Programación en múltiples lenguajes (JavaScript, Python, Java)',
        'Diseño de bases de datos',
        'Desarrollo Frontend (React, Angular)',
        'Desarrollo Backend (Node.js, Flask, Django)',
        'Control de versiones con Git/GitHub',
        'Metodologías ágiles (Scrum, Kanban)',
        'Pruebas unitarias y automatizadas',
        'Despliegue en la nube (AWS, Azure, GCP)',
        'Seguridad de aplicaciones',
        'Optimización de rendimiento',
        'CI/CD (Integración y Entrega Continuas)',
      ],
    },
  ];

  const projects = [
    { id: '1', name: 'Portfolio Web' },
    { id: '2', name: 'Tienda en Línea' },
    { id: '3', name: 'Blog Personal' },
    { id: '4', name: 'Sistema de Reservaciones' },
    { id: '5', name: 'Aplicación de Tareas' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar hidden={isStatusBarHidden} />

      <View style={styles.buttonContainer}>
        <Button title="Toggle Status Bar" onPress={toggleStatusBar} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}
      nestedScrollEnabled>
        {/* Contenido General */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Curriculum</Text>
          <Text style={styles.generalText}>
          Soy un desarrollador web apasionado por la tecnología, con experiencia en 
          la creación de aplicaciones web dinámicas utilizando tecnologías como JavaScript, 
          React, Node.js y bases de datos. Me especializo en el desarrollo frontend y backend, 
          aplicando buenas prácticas de programación y metodologías ágiles. Mi objetivo es 
          continuar aprendiendo y colaborar en proyectos desafiantes que me permitan seguir 
          creciendo como profesional y aportar soluciones innovadoras.          </Text>
        </View>

        {/* Contenedor de SectionList */}
        <View style={styles.borderedList}>
          <Text style={styles.listHeaderTitle}>Competencias</Text>
          <SectionList
            sections={sections}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.item}>{item}</Text>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
            contentContainerStyle={styles.listContent}
            style={styles.list}
            nestedScrollEnabled
          />
        </View>

        {/* Contenedor de FlatList */}
        <View style={styles.borderedList}>
          <Text style={styles.listHeaderTitle}>Proyectos</Text>
          <FlatList
            data={projects}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )}
            nestedScrollEnabled
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7E8F7',
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: '#D7E8F7',
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  section: {
    padding: 15,
    backgroundColor: '#E8F1FA',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#444',
  },
  generalText: {
    fontSize: 16,
    color: '#666',
  },
  borderedList: {
    margin: 10,
    borderWidth: 2,
    borderColor: '#888',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 10,
  },
  listHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  list: {
    maxHeight: 500,
  },
  listContent: {
    paddingBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    backgroundColor: '#E8F1FA',
    padding: 10,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  item: {
    fontSize: 16,
    color: '#444',
  },
});

export default Competencias;
