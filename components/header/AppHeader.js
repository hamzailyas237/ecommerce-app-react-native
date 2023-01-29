
import React from 'react';
import { ListItem, Avatar } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';

function RNEListItemAccordion() {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      <ListItem.Accordion
        content={
          <ListItem.Content>
            <Text>
              <Icon name="menu" size={30} color="black" />
            </Text>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        <ListItem>
          <Avatar
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/men/32.jpg',
            }}
          />
          <ListItem.Content>
            <ListItem.Title>John Doe</ListItem.Title>
            <ListItem.Subtitle>Principle Engineer</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <Avatar
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/men/36.jpg',
            }}
          />
          <ListItem.Content>
            <ListItem.Title>Albert</ListItem.Title>
            <ListItem.Subtitle>Staff Engineer</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </ListItem.Accordion>
    </>
  );
}

export default RNEListItemAccordion