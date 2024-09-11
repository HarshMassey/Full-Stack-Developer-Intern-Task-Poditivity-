// src/components/FilterBar.tsx
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map(category => (
        <TouchableOpacity
          key={category}
          onPress={() => onSelectCategory(category)}
          style={[
            styles.button,
            selectedCategory === category && styles.selectedButton
          ]}
        >
          <Text style={styles.buttonText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 10, paddingLeft: 10 },
  button: {
    marginRight: 10,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 20
  },
  selectedButton: {
    backgroundColor: '#007AFF'
  },
  buttonText: {
    fontSize: 14,
    color: '#fff'
  }
});

export default FilterBar;
