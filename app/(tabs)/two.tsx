import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CONTACTS = [
  { name: 'Aman Kushwaha', phone: '3984717879' },
  { name: 'Areeb Siddiqui', phone: '42356765432456' },
  { name: 'Ujjwal Swarnkar', phone: '4635454332' },
  { name: 'Shubham Joshi', phone: '15324675432' },
  { name: 'Sambhav Gupta', phone: '4123564532' },
  { name: 'Hemant Sonbarse', phone: '32456432132' },
  { name: 'Ninad Ingole', phone: '1342567654321' },
  { name: 'Mayank Prajapati', phone: '341243' },
  { name: 'Rahul Aggarwal', phone: '24133333333333' },
  { name: 'Bhakti', phone: '214134124' },
];

export default function ContactsScreen() {
  const [searchText, setSearchText] = useState('');

  const filteredContacts = CONTACTS.filter((contact) => {
    const nameMatch = contact.name.toLowerCase().includes(searchText.toLowerCase());
    const phoneMatch = contact.phone.includes(searchText);
    return nameMatch || phoneMatch;
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.contactItem}>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactPhone}>{item.phone}</Text>
      </View>
      <AntDesign name="right" size={20} color="#666" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Landline Contacts</Text>
        <View style={styles.searchContainer}>
          <AntDesign name="search1" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
      </View>
      <FlatList
        data={filteredContacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.phone}
        contentContainerStyle={styles.contactsList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FB',
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  contactsList: {
    padding: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  contactInfo: {
    flex: 1,
    marginRight: 10,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactPhone: {
    fontSize: 16,
    color: '#666',
  },
});
