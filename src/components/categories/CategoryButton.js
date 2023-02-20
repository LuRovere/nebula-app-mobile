import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import filterCategoryGamesActions from "../../store/filterCategory/action";
import { useState } from "react";

const { filterCategoryGames } = filterCategoryGamesActions;

export default function CategoryButton(props) {
  const { id, index, name } = props;
  const [click, setClick] = useState(true);
  const [color, setColor] = useState(false);
  const dispatch = useDispatch();
  let category = useSelector((store) => store?.categories?.categories);

  useEffect(() => {
    if (category.length > 0) {
      if (category.includes(name)) {
        setColor(!color);
      }
    }
  }, []);

  const getName = (e) => {
    setClick(!click);
    setColor(!color);
    dispatch(filterCategoryGames(name));
  };

  return (
    <TouchableOpacity
      style={[styles.buttonCategory, color && styles.buttonCategoryActive]}
      onPress={getName}
      id={id}
      key={index}
    >
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonCategory: {
    height: 40,
    margin: 2,
    borderWidth: 1.2,
    borderColor: 'black',
    borderRadius: 5,
    padding: 8,
    backgroundColor: "#242038",
  },
  buttonCategoryActive: {
    backgroundColor: "#725AC1",
    borderColor: '#CAC4CE'
  },
  buttonText: {
    fontSize: 18,
    height: 25,
    color: 'white',
    textAlign: 'center'
  },
});