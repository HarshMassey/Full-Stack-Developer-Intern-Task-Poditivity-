// src/screens/FeedScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import FeedItem from '../components/FeedItem';
import FilterBar from '../components/FilterBar';
import { fetchFeedData } from '../services/api';

const categories = ['All', 'Tech', 'Fashion', 'Food', 'Travel'];

const FeedScreen: React.FC = () => {
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    loadFeedData();
  }, [page, selectedCategory]);

  const loadFeedData = async () => {
    setLoading(true);
    const data = await fetchFeedData(page, selectedCategory);
    setFeedData(prev => [...prev, ...data]);
    setLoading(false);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleRefresh = () => {
    setFeedData([]);
    setPage(1);
  };

  const renderItem = ({ item }) => (
    <FeedItem title={item.title} description={item.description} imageUrl={item.imageUrl} onPress={() => {}} />
  );

  return (
    <View style={styles.container}>
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <FlatList
        data={feedData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
        refreshing={loading}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' }
});

export default FeedScreen;
