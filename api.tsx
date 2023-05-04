import axios from 'axios';
import React, { useEffect, useState } from 'react';


const [articles, setArticles] = useState([]);

useEffect(() => {
  axios.get('https://newsapi.org/v2/top-headlines?country=il&apiKey=4b4059d4befd45d1882ef4913a6a5c04')
    .then(response => {
      setArticles(response.data.articles);
    })
    .catch(error => {
      console.error(error);
    });
}, []);

{articles.map(article => (
  <View key={article.url}>
    <Text>{article.title}</Text>
    <Text>{article.description}</Text>
    <Image source={{ uri: article.urlToImage }} style={{ width: 200, height: 200 }} />
  </View>
))}
