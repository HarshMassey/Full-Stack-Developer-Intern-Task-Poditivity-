// src/components/FeedItem.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface FeedItemProps {
  title: string;
  description: string;
  imageUrl: string;
  onPress: () => void;
}

const FeedItem: React.FC<FeedItemProps> = ({ title, description, imageUrl, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', padding: 10, marginBottom: 10 },
  image: { width: 80, height: 80, borderRadius: 10 },
  textContainer: { marginLeft: 10, flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#666' },
});

export default FeedItem;
