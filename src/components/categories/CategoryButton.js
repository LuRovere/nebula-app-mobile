import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import filterCategoryGamesActions from "../../store/filterCategory/action";

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
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonCategoryActive: {
    backgroundColor: "blue",
  },
  buttonText: {
    fontSize: 18,
    color: "black",
  },
});