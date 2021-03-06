import React, { Component } from "react";
//components
import Sections from "./components/Sections";
import Searchbar from "./components/Searchbar";
import GalleryRender from "./components/ImageGallery";
import ButtonRender from "./components/Button";
import Loader from "./components/Loader";
import Notification from "./components/Notification";
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
    if (this.state.page > 2 && prevState.page !== this.state.page) {
      this.scrollToBottom();
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

  scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    const { images, isLoading, largeImageUrl, error } = this.state;
    return (
      <Sections>
        <Searchbar onSubmit={this.onSubmit} />
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}
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
