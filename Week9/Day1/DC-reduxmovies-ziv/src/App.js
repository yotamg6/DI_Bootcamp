import React,{ Component} from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

class App extends Component{
constructor(){
  super();
  this.state={
  //    moviesDetails:[
  //     {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4,},
  //     {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7,},
  //     {title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4,},
  //     {title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3,},
  //     {title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9,},
  // ],
  // itemDetail:null
  }
}
// showDetails =(item)=>{
//   // this.setState({itemDetail: item})
// }
  render() {
    return (
      <div className="App">
        <MovieList/>
        <MovieDetails/>
        {/* <MovieList details={this.state.moviesDetails} showDetails={this.showDetails}/> */}
        {/* <MovieDetails itemDetail={this.state.itemDetail}/> */}
      </div>
    )
  } 
}

export default App;
