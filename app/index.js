// index.js
import React from 'react';
import { Pressable, Text, TextInput, View, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';

import Styles from '../styles/page-styles';

export default function page() {
    const [name, onChangeName] = React.useState("");
    const [verb, onChangeVerb] = React.useState("");
    const [food, onChangeFood] = React.useState("");
    // Just heard we may need
    const [nameHint, onChangeNameHint] = React.useState("Your Name");
    const [verbHint, onChangeVerbHint] = React.useState("Past Tense Verb");
    const [foodHint, onChangeFoodHint] = React.useState("Favourite Food");

    // For router Push having trouble doing the check empty until found this
    const router = useRouter();
  
    // Clear fields
    // sets the field onchange to '' essentially reseting them
    const clearFields = () => {
      onChangeName('');
      onChangeVerb('');
      onChangeFood('');
      Alert.alert('Field Text Gone', 'You Just cleared your fields');
    };
  
    // Check Empty
    // checks if values are empty if not goes to next page
    const checkEmpty = () => {
        // Trim incase they just put spaces?


      if (name.trim() === '' || verb.trim() === '' || food.trim() === '') {
        Alert.alert('Error', 'Some field may be missing');
      }  else {
          router.push({ pathname: "/story", params: { name, verb, food} });
      }
    };
  
    return (
      <View style={Styles.page}>
        <View style={Styles.titlePage}>
            <Text style={Styles.title}>
            <Link href='https://www.madlibs.com/'>Mad Libs</Link>
            </Text>
            <Text style={Styles.instructions}>
            Fill in the Blanks then create your hall pass!
            </Text>
        </View>

        <View style={Styles.inputBoxes}>
            <TextInput
            style={Styles.input}
            onChangeText={onChangeName}
            value={name}
            maxLength={20}
            placeholder={nameHint}
            />
            <TextInput
            style={Styles.input}
            onChangeText={onChangeVerb}
            value={verb}
            maxLength={8}
            placeholder={verbHint}
            />
            <TextInput
            style={Styles.input}
            onChangeText={onChangeFood}
            value={food}
            maxLength={20}
            placeholder={foodHint}
            />
        </View>

        <View style={Styles.buttonPage}>
            <Pressable 
                style={Styles.button}
                onPress={checkEmpty}>
            <Text style={Styles.buttonText}>Make your Hall Pass</Text>
            </Pressable>

            <Pressable 
                style={Styles.button}
                onPress={clearFields}>
            <Text style={Styles.buttonText}>Clear Text Fields</Text>
            </Pressable>
        </View>
    </View>
    );
  }