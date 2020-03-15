import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">increment</button>
        <ul>{this.renderTags()}</ul>
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>there is no tags!</p>;
    return this.state.tags.map(tags => <li key={tags}>{tags}</li>);
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
