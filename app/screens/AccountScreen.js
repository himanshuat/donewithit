import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Icon from '../components/Icon';

import colors from '../config/colors';

const menuItems = [
	{
		title: "My Listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		}
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
		targetScreen: "Messages",
	}
]

function AccountScreen({ navigation }) {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem title="Tony Stark" subTitle="tonystark@marvel.com" image={require('../assets/tony.jpg')} />
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={menuItem => menuItem.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
							onPress={() => navigation.navigate(item.targetScreen)}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
				/>
			</View>
			<ListItem title="Log Out" IconComponent={<Icon name="logout" backgroundColor='#FFE66D' />} />
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
	},
	screen: {
		backgroundColor: colors.light,
	}
})

export default AccountScreen;