import React, { Component } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

class SearchbarRender extends Component {
  state = {
    searchQuery: "",
  };

  changeHandler = (event) => {
    const query = event.currentTarget.value;

    this.setState({ searchQuery: query });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const query = this.state.searchQuery;
    this.props.onSubmit(query);
    this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: "" });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm}>
          <button
            type="submit"
            className={styles.SearchFormButton}
            onClick={this.submitHandler}
          >
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.changeHandler}
          />
        </form>
      </header>
    );
  }
}

export default SearchbarRender;

SearchbarRender.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string,
};
