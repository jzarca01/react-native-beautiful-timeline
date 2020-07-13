import React from "react";
import PropTypes from "prop-types";
import { View, FlatList } from "react-native";
import Card from "../Card/Card";
import styles from "./Item.style";
import PointLine from "../PointLine/PointLine";

const dummyListData = [1, 2];

const Item = ({ data, list, isLastMember, renderTitle, ...rest }) => {

  renderItem = listData => {
    const { item, index } = listData;
    return <Card {...rest} key={index} isCard data={item} renderTitle={renderTitle} />;
  };

  return (
    <View style={styles.container}>
      <PointLine
        {...rest}
        data={data.date}
        length={list.length}
        isLastMember={isLastMember}
      />
      <View style={styles.insideListContainer}>
        <FlatList
          data={list}
          renderItem={renderItem.bind(this)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

Item.propTypes = {
  data: PropTypes.object,
  list: PropTypes.array,
  renderTitle: PropTypes.func
};

Item.defaultProps = {
  data: {},
  list: dummyListData
};

export default Item;
