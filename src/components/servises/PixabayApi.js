import axios from "axios";

PixabayApi = ({ searchQuery, page, apiKey }) => {
  return axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`
    )
    .then((response) => response.data.hits);
};

export default { PixabayApi };
