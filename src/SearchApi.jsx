import axios from 'axios';
// import Notiflix from 'notiflix';

// npm install axios

// 28373158 - c538c9e9e2bb6e6b192e187c7;

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна

export default async function SearchApi(value, page) {
  try {
    console.log(value, page);
    const response = await axios({
      url: 'https://pixabay.com/api/',
      params: {
        key: '28373158-c538c9e9e2bb6e6b192e187c7',
        q: value,
        orientation: 'horizontal',
        image_type: 'photo',
        // safesearch: true,
        safesearch: false,
        page: page,
        per_page: 12,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
