import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native";
import styles, { _container } from "./Timeline.style";
import Item from "./components/Item/Item";

const Timeline = ({ data, renderTitle, ...rest }) => {
  renderItem = list => {
    const { item, index } = list;
    const isLastMember = index === data.length - 1;
    return (
      <Item
        {...rest}
        data={item}
        list={item.data}
        isLastMember={isLastMember}
        renderTitle={renderTitle}
      />
    );
  };

  return (
    <React.Fragment>
      <FlatList
        data={data}
        style={styles.listStyle}
        renderItem={renderItem.bind(this)}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        {...rest}
      />
    </React.Fragment>
  );
};

Timeline.propTypes = {
  data: PropTypes.array,
  renderTitle: PropTypes.func,
};

Timeline.defaultProps = {
  data: [1, 2, 3, 4, 5],
  renderTitle: title => title
};

export default Timeline;
