import React from 'react'
// yeh kisi ne btaya nahi but note krle .. piche jane ke liye do bar piche jaane ke liye ../../
import './App.css';
import SearchBar from "../SearchBar/SearchBar"
import BusinessList from "../BusinessList/BusinessList"
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}
const businesses = [
  business, business, business, business, business, business,
];
class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     businesses: []
  //   };

  //   this.searchYelp = this.searchYelp.bind(this);
  // }
  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term},
    ${location},
    ${sortBy}`)
  }
  render() {
    return (
      <div className="App">
        <h1>RESTO</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
