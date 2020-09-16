import React, { Component } from "react";
//components
import Sections from "./components/Sections";
import SearchbarRender from "./components/Searchbar";
import GalleryRender from "./components/ImageGallery";
import ButtonRender from "./components/Button";
import Loader from "./components/Loader";
//utils
import SearchImageFromPixabay from "./components/servises/PixabayApi";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    searchQuery: "",
    error: null,
    pixabayApiKey: `17651389-56d50551944c5e0543b25b372`,
    page: 1,
    largeImageUrl: null,
  };

  onSubmit = (query) => {
    this.setState({ searchQuery: query });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const nextQuery = this.state.searchQuery;
    const prevQuery = prevState.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  };

  fetchImages = () => {
    this.setState({ isLoading: true });
    const { searchQuery, page, pixabayApiKey } = this.state;
    SearchImageFromPixabay.PixabayApi(searchQuery, page, pixabayApiKey)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  openModal = (modalImage) => {
    this.setState({ largeImageUrl: modalImage });
  };

  closeModal = () => {
    this.setState({ largeImageUrl: null });
  };

  render() {
    const { images, isLoading, largeImageUrl } = this.state;
    return (
      <Sections>
        <SearchbarRender onSubmit={this.onSubmit} />
        {largeImageUrl !== null && (
          <Modal
            largeImage={largeImageUrl}
            onCloseModal={this.closeModal}
          ></Modal>
        )}
        {images.length > 0 && (
          <GalleryRender images={images} onOpenModal={this.openModal} />
        )}
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <ButtonRender onFetchImages={this.fetchImages} />
        )}
      </Sections>
    );
  }
}

export default App;
