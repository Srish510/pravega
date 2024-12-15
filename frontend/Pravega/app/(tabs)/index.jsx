import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import { Picker } from 'react-native'; // Assuming react-native-picker is used

const HomePage = ({ userName, profilePic, onLanguageChange, onProfilePress, onChatPress, onNavigate }) => {
    const screenWidth = Dimensions.get('window').width;
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image source={require('../../assets/images/icon.png')} style={styles.logo} />
                    <Text style={styles.welcomeText}>Welcome, {userName}!</Text>
                </View>
                <View style={styles.headerRight}>
                    <Picker
                        style={styles.languagePicker}
                        onValueChange={onLanguageChange}
                    >
                        <Picker.Item label="English" value="en" />
                        <Picker.Item label="Hindi" value="hi" />
                        <Picker.Item label="Bengali" value="bn" />
                        {/* Add other languages */}
                    </Picker>
                    <TouchableOpacity onPress={onProfilePress}>
                        <Image source={{ uri: profilePic }} style={styles.profilePic} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Body */}
            <ScrollView contentContainerStyle={styles.body}>
                <View style={styles.financialSummary}>
                    <Text style={styles.summaryTitle}>Your Financial Snapshot:</Text>
                    <Text>Bank Balance: ₹50,000</Text>
                    <Text>Salary: ₹80,000/month</Text>
                    <Text>Net Worth: ₹2,000,000</Text>
                    <Text>Debt: ₹100,000</Text>
                    <Text>Net Profits/Losses: ₹50,000</Text>
                </View>

                <View style={styles.motivationSection}>
                    <Text style={styles.motivationText}>
                        "You have saved 25% more since you started using our app! Keep it up!"
                    </Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={true} contentContainerStyle={styles.cardsContainer}>
                    <View style={[styles.card, { width: screenWidth / 2 - 30 }]}><Text>Tax Calculator</Text></View>
                    <View style={[styles.card, { width: screenWidth / 2 - 30 }]}><Text>Expense Tracker</Text></View>
                    <View style={[styles.card, { width: screenWidth / 2 - 30 }]}><Text>Investment Records</Text></View>
                    <View style={[styles.card, { width: screenWidth / 2 - 30 }]}><Text>Stock Market</Text></View>
                </ScrollView>
            </ScrollView>

            {/* Chat Icon */}
            <TouchableOpacity style={styles.chatIcon} onPress={onChatPress}>
                <Image source={require('../../assets/images/icon.png')} style={styles.chatImage} />
            </TouchableOpacity>

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => onNavigate('Home')} style={styles.footerItem}>
                    <Image source={require('../../assets/images/icon.png')} style={styles.footerIcon} />
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onNavigate('Tools')} style={styles.footerItem}>
                    <Image source={require('../../assets/images/icon.png')} style={styles.footerIcon} />
                    <Text>Tools</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onNavigate('Learning')} style={styles.footerItem}>
                    <Image source={require('../../assets/images/icon.png')} style={styles.footerIcon} />
                    <Text>Learning</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onNavigate('Forum')} style={styles.footerItem}>
                    <Image source={require('../../assets/images/icon.png')} style={styles.footerIcon} />
                    <Text>Forum</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onNavigate('Settings')} style={styles.footerItem}>
                    <Image source={require('../../assets/images/icon.png')} style={styles.footerIcon} />
                    <Text>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f8f9fa',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    welcomeText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    languagePicker: {
        height: 40,
        width: 100,
        marginRight: 10,
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    body: {
        padding: 20,
    },
    financialSummary: {
        marginBottom: 20,
    },
    summaryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    motivationSection: {
        marginBottom: 20,
    },
    motivationText: {
        fontSize: 16,
        fontStyle: 'italic',
    },
    cardsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    card: {
        height: 100,
        backgroundColor: '#e9ecef',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    chatIcon: {
        position: 'absolute',
        bottom: 80,
        right: 20,
    },
    chatImage: {
        width: 50,
        height: 50,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#f8f9fa',
    },
    footerItem: {
        alignItems: 'center',
    },
    footerIcon: {
        width: 30,
        height: 30,
    },
});

export default HomePage;
