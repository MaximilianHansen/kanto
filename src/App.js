import './App.css';
import React, { Component } from 'react';
import Pokecard from './Pokecard';
import 'tachyons';
import SearchBox from './SearchBox';



class App extends Component {
  constructor() {
    


      super()
      this.state ={
          pokemonImage:'',
          pokemon:'',
          type:'',
          searchNumber: '',
          allPokemon:[],
          pics:[],
          id : '0'
      };
    this.onInputchange = this.onInputchange.bind(this);
    }



componentDidMount(){    

    const fetcher1 = (x) => {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
        .then(response => response.json())
        .then((a)=>{
                    this.setState({allPokemon : a.results})
                    this.setState({pokemon : a.results[x]})
                    var e = 0;
                    do { fetch(this.state.allPokemon[e].url) 
                        .then(response => response.json())
                        .then((data) => {
                          this.state.pics.push(data)}) 
                          e++;
                        }
                        while(e < 150);
                    fetch(this.state.pokemon.url)
                      .then(response => response.json())
                      .then((b)=>{  
                      this.setState({pokemonImage : b.sprites.front_default});
                      console.log(this.state.pokemonImage)
                      this.setState({type : b.types[0].type.name});
                       })
                  }) 
            }
                  
      fetcher1(0) 

}

onInputchange(event) {
      this.setState({searchNumber : event.target.value});
      this.state.pics.sort(function(a, b) { 
                    return a.order - b.order })   
  
   }

render() {
    
    const fetcher = (x) => { 
      if(x && x < 150) {
      
      this.state.pokemon = this.state.allPokemon[x];
      this.state.pokemonImage = this.state.pics[x].sprites.front_default
      this.state.type = this.state.pics[x].types[0].type.name
      this.state.id = x
     }}

    fetcher(this.state.searchNumber)

    return( 
      <div className= "tc">
        <div className="tc dib br3 pa4 ma5 shadow-5 bg-near-white">
          <h1 className="f1 ttu pa5">Gotta Catch Em' All</h1>
          <SearchBox searchChange={this.onInputchange}/>
          <Pokecard no={this.state.id} pokemon = {this.state.pokemon} pokemonImage={this.state.pokemonImage} type={this.state.type} />
        </div>
      </div>
    );
}
}
  

export default App;
