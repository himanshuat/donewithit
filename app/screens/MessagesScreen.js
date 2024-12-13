import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
	{
		id: 1,
		title: 'Tony Stark',
		description: 'Hey! Is this item still available?',
		image: require('../assets/tony.jpg')
	},
	{
		id: 2,
		title: 'Tony Stark',
		description: 'I am interested in this item. When will you be able to post it?',
		image: require('../assets/tony.jpg')
	},
	{
		id: 3,
		title: 'Tony Stark',
		description: 'I would like to buy this. Do you have any discounts?',
		image: require('../assets/tony.jpg')
	}
]

function MessagesScreen(props) {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = message => {
		setMessages(messages.filter(m => m.id !== message.id));
	}

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={message => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log("Message selected: ", item)}
						renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages(initialMessages)
				}}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({

})

export default MessagesScreen;