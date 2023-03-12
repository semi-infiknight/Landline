import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Image, TouchableNativeFeedback } from 'react-native';
import { Text, View } from '../components/Themed';

export default function CompanyHomePage() {
  return (
    
    <ScrollView style={styles.container}>
      <TouchableNativeFeedback>
      <View style={styles.heroSection}>
        <Text style={styles.title}>REBIRTH OF LANDLINE Inc</Text>
        <Text style={styles.subtitle}>Integrating the lost landline technology into existing systems.</Text>
        <Image source={{ uri: 'https://m.media-amazon.com/images/I/610F9Vv22gL.jpg' }} style={styles.heroImage} />
      </View>
      </TouchableNativeFeedback>
     
      <TouchableNativeFeedback>
      <View style={styles.featureSection}>
        <Text style={styles.featureTitle}>Why we need to bring back landline technology</Text>

        <View style={styles.feature}>
          <Image source={{ uri: 'https://m.media-amazon.com/images/I/610F9Vv22gL.jpg' }} style={styles.featureImage} />
          <Text style={styles.featureText}>Reduces radiation hazards</Text>
        </View>

        <View style={styles.feature}>
          <Image source={{ uri: 'https://m.media-amazon.com/images/I/610F9Vv22gL.jpg' }} style={styles.featureImage} />
          <Text style={styles.featureText}>Can reach to remote places where Cellular networks cannot reach.</Text>
        </View>

       
      </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
      <View style={styles.testimonialSection}>
        <Text style={styles.testimonialTitle}>Click Here to read about the radiation hazards of over using Cellular.</Text>

        <View style={styles.testimonial}>
          <Image source={{ uri: 'https://m.media-amazon.com/images/I/610F9Vv22gL.jpg' }} style={styles.testimonialImage} />
          <Text style={styles.testimonialText}>Long Duration Radaiation Exposure Report</Text>
        </View>

    
      </View>
      </TouchableNativeFeedback>
      

      {/* Use a light status bar on iOS */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      
    </ScrollView>
  
  );
}
const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    heroSection: {
      backgroundColor: '#444',
      paddingHorizontal: 20,
      paddingVertical: 40,
    },
    title: {
      color: '#fff',
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      color: '#fff',
      fontSize: 20,
      marginBottom: 20,
    },
    heroImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    featureSection: {
      paddingHorizontal: 20,
      paddingVertical: 40,
    },
    featureTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    feature: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    featureImage: {
      width: 50,
      height: 50,
      resizeMode: 'cover',
      borderRadius: 10,
      marginRight: 10,
    },
    featureText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    testimonialSection: {
      backgroundColor: '#FFB6C1',
      paddingHorizontal: 20,
      paddingVertical: 40,
    },
    testimonialTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    testimonial: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    testimonialImage: {
      width: 30,
      height: 30,
      resizeMode: 'cover',
      borderRadius: 15,
      marginRight: 10,
    },
    testimonialText: {
      fontSize: 16,
    },
  }
);  