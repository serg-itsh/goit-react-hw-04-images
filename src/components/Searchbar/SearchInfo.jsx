// import { Component } from 'react';

// export class SearchInfo extends Component {
//   state = {
//     images: null,
//   };
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.images !== this.props.images) {
//       console.log('New images');
//       console.log(prevProps.images);
//       console.log(this.props.images);
//       fetch(
//         `https://pixabay.com/api/?q=${this.props.images}&page=1&key=28373158-c538c9e9e2bb6e6b192e187c7&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         .then(res => res.json())
//         .then(images => this.setState({ images }));
//       // .finally(() => this.setState({ loading: false }));
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>Images</h1>
//         {this.state.images && <p>{this.state.images.tags}</p>}

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
//       </div>
//     );
//   }
// }
