// import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { useState } from 'react';

// import { SearchInfo } from './Searchbar/SearchInfo';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
// import { ToastContainer } from 'react-toastify';

// import axios from 'axios';

// npm install axios

// 28373158 - c538c9e9e2bb6e6b192e187c7;

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна

export const App = () => {
  const [image, setImage] = useState('');
  const [query, setQuery] = useState('');

  const handleSearchFormSubmit = query => {
    setQuery(query);
  };

  const handleOpenModal = img => {
    setImage(img);
  };

  const handleCloseModal = () => {
    setImage('');
  };

  // const { image, query } = this.state;
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr0',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      <div>
        <Searchbar onSubmit={handleSearchFormSubmit} />
        <ImageGallery query={query} handleOpenModal={handleOpenModal} />
        {image && <Modal image={image} onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

// export class App extends Component {
//   state = {
//     imageName: '',
//     images: '',
//     loading: false,
//     query: '',
//   };

//   handleSearchFormSubmit = imageName => {
//     console.log(imageName);
//     this.setState({ imageName });
//   };
//   componentDidMount() {
//     this.setState({ loading: true });

//     setTimeout(() => {
//       fetch(
//         `https://pixabay.com/api/?q=cat&page=1&key=28373158-c538c9e9e2bb6e6b192e187c7&image_type=photo&orientation=horizontal&per_page=12`
//       )

//         .then(res => res.json())
//         .then(data => this.setState({ images: data }))
//         .finally(() => this.setState({ loading: false }));
//     }, 1000);
//   }

//   render() {
//     return (
//       <div

//       >
//         <Searchbar onSubmit={this.handleSearchFormSubmit} />
//         <SearchInfo />
//         <ToastContainer autoClose={3000} />

//         <ImageGallery query={this.state.query} />
//         {this.state.images && (
//           <Modal image={this.state.images} onClose={this.handlerCloseModal} />
//         )}

//         {this.state.loading && <h1>Loading...</h1>}
//         {this.state.images && <div>{this.state.images.hits[0].id}</div>}
//         {this.state.images && (
//           <div>
//             <img
//               src={
//                 // webformatURL
//                 'https://pixabay.com/get/gad936bb55da2214478a28a686cfcd366382738cdb6625cdca55c4e53838921ec5e281667f3fb93f13bc5d73a9fd171a7_640.jpg'
//               }
//               width="350"
//               alt=""
//             />
//             {this.state.images.hits[0].webformatURL}
//           </div>
//         )}

//         <Modal />
//         <ImageGallery />
//       </div>
//     );
//   }
// }
