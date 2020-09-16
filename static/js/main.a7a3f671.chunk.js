(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{2:function(e,a,t){e.exports={App:"styles_App__1rm16",Container:"styles_Container__1s8pw",Searchbar:"styles_Searchbar__2_yzc",SearchForm:"styles_SearchForm__1HcaX",SearchFormButton:"styles_SearchFormButton__10ZK4",SearchFormButtonLabel:"styles_SearchFormButtonLabel__3FK4n",SearchFormInput:"styles_SearchFormInput__1sKCi",ImageGallery:"styles_ImageGallery__2YXlM",ImageGalleryItem:"styles_ImageGalleryItem__2f0rK",ImageGalleryItemImage:"styles_ImageGalleryItemImage__1fd22",Overlay:"styles_Overlay__2y29n",Modal:"styles_Modal__3vZCC",Button:"styles_Button__TD6HC",Loader:"styles_Loader__F-Kiq"}},22:function(e,a,t){e.exports=t(65)},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(18),c=t.n(o),l=t(8),s=t(4),i=t(5),u=t(7),m=t(6),h=t(2),p=t.n(h);function g(e){var a=e.children;return r.a.createElement("div",{className:p.a.Container},a)}var d=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={searchQuery:""},e.changeHandler=function(a){var t=a.currentTarget.value;e.setState({searchQuery:t})},e.submitHandler=function(a){a.preventDefault();var t=e.state.searchQuery;e.props.onSubmit(t),e.reset()},e.reset=function(){e.setState({searchQuery:""})},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:p.a.Searchbar},r.a.createElement("form",{className:p.a.SearchForm},r.a.createElement("button",{type:"submit",className:p.a.SearchFormButton,onClick:this.submitHandler},r.a.createElement("span",{className:p.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:p.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.changeHandler})))}}]),t}(n.Component),y=t(21);function f(e){var a=e.id,t=e.pageURL,n=e.webformatURL,o=e.largeImageURL,c=e.onOpenModal;return r.a.createElement("li",{className:p.a.ImageGalleryItem,onClick:function(){return c(o)}},r.a.createElement("img",{src:n,alt:t,className:p.a.ImageGalleryItemImage,"data-source":o,"data-id":a}))}var _=t(1),b=t.n(_);function v(e){var a=e.images,t=e.onOpenModal;return r.a.createElement("ul",{className:p.a.ImageGallery},a.map((function(e){var a=e.id,n=Object(y.a)(e,["id"]);return r.a.createElement(f,Object.assign({key:a},n,{onOpenModal:t}))})))}function I(e){var a=e.onFetchImages;return r.a.createElement("button",{className:p.a.Button,onClick:a},"load more")}f.propTypes={image:b.a.array,id:b.a.string,onOpenModal:b.a.func};var S=t(19),E=t.n(S),O=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:p.a.Loader},r.a.createElement(E.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100}))}}]),t}(r.a.Component),j=t(20),C=t.n(j),F=function(e,a,t){return C.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(a,"&key=").concat(t,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},M=F;F.propTypes={searchQuery:b.a.string.isRequired,page:b.a.number.isRequired,apiKey:b.a.string.isRequired};var w=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).handleKeyDown=function(a){"Escape"===a.code&&e.props.onCloseModal()},e.closeModal=function(a){a.target===a.currentTarget&&e.props.onCloseModal()},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return r.a.createElement("div",{className:p.a.Overlay,onClick:this.closeModal},r.a.createElement("div",{className:p.a.Modal},r.a.createElement("img",{src:this.props.largeImage,alt:""})))}}]),t}(n.Component),k=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={images:[],isLoading:!1,searchQuery:"",error:null,pixabayApiKey:"17651389-56d50551944c5e0543b25b372",page:1,largeImageUrl:null},e.onSubmit=function(a){e.setState({searchQuery:a})},e.componentDidUpdate=function(a,t){var n=e.state.searchQuery;t.searchQuery!==n&&e.fetchImages()},e.fetchImages=function(){e.setState({isLoading:!0});var a=e.state,t=a.searchQuery,n=a.page,r=a.pixabayApiKey;M(t,n,r).then((function(a){return e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(a)),page:e.page+1}}))})).catch((function(a){return e.setState({error:a})})).finally((function(){return e.setState({isLoading:!1})}))},e.openModal=function(a){e.setState({largeImageUrl:a})},e.closeModal=function(){e.setState({largeImageUrl:null})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state,a=e.images,t=e.isLoading,n=e.largeImageUrl;return r.a.createElement(g,null,r.a.createElement(d,{onSubmit:this.onSubmit}),null!==n&&r.a.createElement(w,{largeImage:n,onCloseModal:this.closeModal}),a.length>0&&r.a.createElement(v,{images:a,onOpenModal:this.openModal}),t&&r.a.createElement(O,null),a.length>0&&!t&&r.a.createElement(I,{onFetchImages:this.fetchImages}))}}]),t}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a7a3f671.chunk.js.map