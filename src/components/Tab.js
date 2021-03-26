import React from "react";
import PropTypes from "prop-types";

class Tab extends React.Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.element.isRequired,
    onClickTab: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  onClickItem = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClickItem,
      props: { activeTab, label }
    } = this;

    let className = "tab-list-item";
    if (activeTab === label) {
      className += " active-tab-list-item";
    }
    return (
      <li className={className} onClick={onClickItem}>
        {label}
      </li>
    );
  }
}

export default Tab;
