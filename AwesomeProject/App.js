import { StatusBar } from 'expo-status-bar';
import { ImageBackground, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  // Diff composant et decla des états
  const [text, setText] = useState('');
  const [goals, setGoals] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d'altitude",
    "Acheter mon premier appartement",
    "Perdre 5kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);

  // ajt un nouvel objectif a la liste
  const addGoal = () => {
    if (text !== '') {
      setGoals([...goals, text]);
      setText('');
    }
  };

  // suppr objectif a la liste
  const removeGoal = (indexToRemove) => {
    setGoals(goals.filter((goal, index) => index !== indexToRemove));
  };

  // j'affiche un objectif de la liste
  const renderGoalItem = ({ item, index }) => (
      <View style={styles.goalItemContainer}>
        <Text style={styles.goalItem}>{item}</Text>
        <TouchableOpacity onPress={() => removeGoal(index)}>
          <Text style={styles.goalItemDeleteIcon}>x</Text>
        </TouchableOpacity>
      </View>
  );

  // j'affiche l'appli titre , fond decran , alert
  return (
      <ImageBackground source={require('./assets/wp6476345.png')} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>App de Thomas</Text>
          <TouchableOpacity style={styles.appInfoButton} onPress={() => alert('Copyright by Rodriguez Thomas')}>
            <Text style={styles.appInfoButtonText}>Infos App</Text>
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
                placeholder="Ajouter un objectif"
                placeholderTextColor="white"
            />
            <TouchableOpacity style={styles.addButton} onPress={addGoal}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
          <FlatList
              style={styles.list}
              data={goals}
              renderItem={renderGoalItem}
              keyExtractor={(item, index) => index.toString()}
          />
          <StatusBar style="auto" />
        </SafeAreaView>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  appInfoButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  appInfoButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
    width: '100%',
  },
  goalItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
  },
  goalItem: {
    color: 'white',
    fontWeight: 'bold',
  },
  goalItemDeleteIcon: {
    color: 'red'
  },
  addButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 5,
    marginLeft: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 5,
    marginLeft: 10,
    borderColor: "white",
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity: 1,
  },
});
