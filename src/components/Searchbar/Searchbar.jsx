import PropTypes from 'prop-types';
// import { Component } from 'react';
import { useState } from 'react';
// import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import styles from './Searchbar.module.css';
// import { toast } from 'react-toastify';
// Компонент принимает один проп onSubmit - функцию для передачи значения инпута при сабмите формы.

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleNameChange = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    // const { query } = state;
    event.preventDefault();

    if (query.trim() === '') {
      alert('Enter name image');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  // const { query } = state;
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.ButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autocomplete="off"
          autoFocus
          name="query"
          value={query}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// export class Searchbar extends Component {
//   state = {
//     imageName: '',
//     query: '',
//   };

//   handleNameChange = event => {
//     this.setState({ imageName: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     if (this.state.imageName.trim() === '') {
//       alert('Enter name image');
//       // toast.success('Enter name image');
//       return;
//     }

//     this.props.onSubmit(this.state.imageName);
//     this.setState({ imageName: '' });
//   };

//   render() {
//     return (
//       <>
//         <header className={styles.searchbar}>
//           <form onSubmit={this.handleSubmit} className={styles.form}>
//             <button type="submit" className={styles.button}>
//               <span className="button-label">Search</span>
//             </button>

//             <input
//               className={styles.input}
//               type="text"
//               autocomplete="off"
//               autofocus
//               placeholder="Search images and photos"
//               onChange={this.handleNameChange}
//             />
//           </form>
//         </header>
//         <ImageGallery query={this.state.query} />
//       </>
//     );
//   }
// }
