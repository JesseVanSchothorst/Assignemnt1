// story.js
import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

import Styles from '../styles/page-styles';

export default function Page() {
	// to get the date and turn it into the string
  const date = new Date().toLocaleDateString();

	// to get the other values
  const params = useLocalSearchParams();
  const { name, verb, food } = params;
  
  return (
    <View style={Styles.page}>
        {/* Comment: Back Button */}
        <View style={Styles.backHeader}>
            <Link href="/" style={ Styles.backButton }>
                Back
            </Link>
        </View>


        <View style={Styles.madlibHeader}>
            <Text style={ Styles.title }>Mad Libs</Text>
            <Text style={Styles.dateText}>Today's date: {date}</Text>
        </View> 



        <View style={Styles.madlibSection}>
            <View style={Styles.madlibHallpass}>

                <View style={{transform: [{ rotate: '-90deg' }]}}>
                    <Text 
                        numberOfLines={1}
                        style={Styles.hallpassText}>
                        Hall Pass	
                    </Text>
                </View>
            </View>

            <View style={Styles.madlibStory}>        

			    <View style={Styles.storyTextWrapper}>
                    
                        <Text style={Styles.storyText}>
                            My name is { name }!
                        
                        
                            I {verb} to the store to get
                        
                        
                            my favorite food {food}.
                        </Text>
                    
                </View> 

                <View style={ Styles.signBox }>
                    <Text> SIGNED: </Text>
                </View>
            </View>
        </View>   
    </View>
  );
}