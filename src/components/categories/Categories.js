import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, StyleSheet } from "react-native";

import categoryActions from "../../store/categories/actions";
import CategoryButton from "./CategoryButton";

const { getCategories } = categoryActions;

function Categories() {
  const categories = useSelector((store) => store?.categories?.categories);
  console.log(categories)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getCategories({
      })
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerCategories}>
        <View style={styles.containericons}>
          <Image
            style={styles.icon}
            source={require('../../../public/assets/shooterIcon.png')}
          />
          <Image
            style={styles.icon}
            source={require('../../../public/assets/adventureIcon.png')}
          />
          <Image
            style={styles.icon}
            source={require('../../../public/assets/sportsIcon.png')}
          />
          <Image
            style={styles.icon}
            source={require('../../../public/assets/rpgIcon.png')}
          />
          <Image
            style={styles.icon}
            source={require('../../../public/assets/estrategyIcon.png')}
          />
        </View>
        <View style={styles.containerTitle}>
          {categories.map((category, index) => {
            return (
              <CategoryButton
                id={category._id}
                key={index}
                index={index}
                name={category.name}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCategories: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containericons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  containerTitle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Categories;