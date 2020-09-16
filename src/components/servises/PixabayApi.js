import axios from "axios";
import PropTypes from "prop-types";

const PixabayApi = (searchQuery, page, apiKey) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default { PixabayApi };

PixabayApi.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  apiKey: PropTypes.string.isRequired,
};
