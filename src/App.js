import './App.css';
import React, { Component } from 'react';
import Pokecard from './components/Pokecard/Pokecard';
import 'tachyons';
import SearchBox from './components/Searchbox/SearchBox';
import StatsList from './components/Statslist/StatsList'
import AllPokemonButton from './components/nav/AllPokemonButton';
import PokeCardList from "./components/PokeCardList/PokeCardList";
import Scroll from "./components/scroll/Scroll";
import BackToSearchButton from './components/nav/BackToSearchButton';



class App extends Component {
  constructor() {
      super()
      this.state = {
          pokemonImage:'',
          pokemon:'',
          type:'',
          searchNumber: '',
          allPokemon:[],
          pics:[],
          id : '0',
          moves : '',
          pokemonWeight : '',
          pokemonHeight : '',
          route : 'search',
          mounted : false
      };
    this.onInputchange = this.onInputchange.bind(this);
    }



componentDidMount(){

    const fetcher1 = (x) => {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=386')
        .then(response => response.json())
        .then((a)=>{
                    console.log("FETCHING")
                    this.setState({allPokemon : a.results})
                    this.setState({pokemon : a.results[x]})
                    var e = 0;
                    do { fetch(this.state.allPokemon[e].url) 
                        .then(response => response.json())
                        .then((data) => {
                          this.state.pics.push(data)}) 
                          e++;
                        }
                        while(e < 386);
                    fetch(this.state.pokemon.url)
                      .then(response => response.json())
                      .then((b)=>{  
                      this.setState({pokemonImage : b.sprites.front_default});
                      
                      this.setState({type : b.types.map(x => x.type.name).join(" & ")});
                      this.setState({pokemonWeight : b.weight})
                      this.setState({pokemonHeight : b.height})
                      this.setState({mounted:true})
                       })
                  }) 
            }
                  
      fetcher1(0) 
          
}

onInputchange = (event) => {
      this.setState({searchNumber : event.target.value});
      this.state.pics.sort(function(a, b) { 
                    return a.id - b.id })   
   }

buttonclick = (event) => {
  this.setState({route : 'allpokemon'})
  this.state.pics.sort(function(a, b) { 
    return a.id - b.id })   
}

viewpokestats = () => {
  this.setState({route : 'search'})
}

clicked = (value) => {
  console.log('clicked')
  this.setState({route : 'search'})
  this.setState({searchNumber:value.target.id})
}


render() {
    
    const searchPokemon = (x) => { 
      if(x && x < 386) {
      
      this.state.pokemon = this.state.allPokemon[x];
      this.state.pokemonImage = this.state.pics[x].sprites.front_default
      this.state.type = this.state.pics[x].types.map(x => x.type.name).join(" & ")
      this.state.id = x
      this.state.moves = this.state.pics[x].moves.map(x => x.move.name)
      // console.log('1' ,this.state.moves)
      console.log('2',this.state.pics)
      this.state.pokemonWeight = this.state.pics[x].weight
      this.state.pokemonHeight = this.state.pics[x].height


     }}

    searchPokemon(this.state.searchNumber)

    return( 
      
      <div className = 'mainContainer'>
        {!this.state.mounted ? <div className="loader">LOADING...</div> :
        <div className= "tc">
          <div className="dib br3 ma4 shadow-5 bg-near-white">
            <h1 className=" f1 ttu pa3">Gotta Catch Em' All</h1>
            {this.state.route === 'search' ? 
            <div>
              <SearchBox searchChange={this.onInputchange}/>
              <AllPokemonButton buttonclick={this.buttonclick}/>
              <div className='rowC'>
                <Pokecard no={this.state.id} pokemon = {this.state.pokemon} pokemonImage={this.state.pokemonImage}  />
                <StatsList no={this.state.id} type={this.state.type} weight={this.state.pokemonWeight} height ={this.state.pokemonHeight}/>
              </div>
            </div> 
          
            :

            <div>
              <BackToSearchButton buttonclick={this.viewpokestats}/>
              <Scroll >
                <PokeCardList clickedpoke={this.clicked} allPokemon = {this.state.allPokemon} pokemonImage={this.state.pics}/>
              </Scroll>
            </div> }
            
          </div>
        </div>
        }
      </div>
    );
}
}
  

export default App;
