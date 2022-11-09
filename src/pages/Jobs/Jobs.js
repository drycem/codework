import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import JobItem from '../../components/JobItem/JobItem';

import colors from '../../colors/colors';
import styles from './Jobs.style';

export default ({navigation}) => {
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJobs();
  }, []);

  async function getJobs() {
    const response = await fetch(
      'https://www.themuse.com/api/public/jobs?page=1',
    );
    const {results} = await response.json();
    console.log(results[1]);
    setJobs(results);
    setLoading(false);
  }
  const renderJob = ({item}) => (
    <JobItem
      item={item}
      onPress={() => {
        navigation.navigate('Details', item);
      }}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size={44} color={colors.secondaryColor} />
      ) : (
        <FlatList
          data={jobs}
          renderItem={renderJob}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};
