import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { API_URL } from "../../../configs";
import CategoryButton from "./CategoryButton";



const GamesCategories = () => {
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(`${API_URL}/categories`);
      setCategories(response.data.response);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {categories.map((category, index) => {
        return (
          <CategoryButton
            key={index}
            name={category.name}
            style={styles.buttonCategory}
            index={index}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width:"100%",
  },
});

export default GamesCategories;