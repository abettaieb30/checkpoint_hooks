import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import Desc from './components/Desc';
import {Route,Routes} from 'react-router-dom'
function App() {
 
  const [Keyword , setKeyword] = useState("")
  const [rate , setRate] = useState(1)
  const [movies , setMovies] = useState([
    {
      title : "Legend",
      poster : "https://fr.web.img2.acsta.net/pictures/15/12/02/14/56/399325.jpg",
      id : uuidv4(),
      description : "Durant les années 60, Londres a été marqué du règne brutal des frères Kray. Ronnie était le psychopathe de la famille, alors que son jumeau Reggie s'avérait plus équilibré.",
      year : 2012,
      rate : 4,
      trailer : <iframe width="1000" height="750" src="https://www.youtube.com/embed/yI3v6KfR9Mw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    } ,
    {
      title : "Django-Unchained",
      poster : "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
      id : uuidv4(),
      description : "Deux ans avant la Guerre civile, un ancien esclave du nom de Django s'associe avec un chasseur de primes d'origine allemande qui l'a libéré: il accepte de traquer avec lui des criminels recherchés. En échange, il l'aidera à retrouver sa femme perdue depuis longtemps et esclave elle aussi.",
      year : 2012,
      rate : 5,
      trailer : <iframe width="1000" height="750"src="https://www.youtube.com/embed/0fUCuvNlOCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      title : "the Revenant",
      poster : "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      id : uuidv4(),
      description : "Durant une expédition dans une Amérique profondément sauvage, le légendaire trappeur Hugh Glass est brutalement attaqué par un ours et laissé pour mort par les membres de sa propre équipe. Dans sa quête de survie, Glass endure une souffrance inimaginable ainsi que la trahison de son homme de confiance, John Fitzgerald. Guidé par la volonté et l'amour de sa famille, Glass doit affronter un hiver brutal dans une inexorable lutte pour survivre et trouver la rédemption.",
      
      year : 2012,
      rate : 3,
      
      trailer :  <iframe width="1000" height="750" src="https://www.youtube.com/embed/LoebZZ8K5N0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      title : "The Godfather",
      poster : "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7d2081c07a6afa338191e68c73e1959f7761b53cf9b691d59926aa0ef89874e5._RI_V_TTW_.jpg",
      id : uuidv4(),
      description : "En 1945, à New York, les Corleone sont une des 5 familles de la mafia. Don Vito Corleone, `parrain' de cette famille, marie sa fille à un bookmaker. Sollozzo, `parrain' de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue, mais celui-ci refuse. Sonny, un de ses fils, y est quant à lui favorable. Afin de traiter avec Sonny, Sollozzo tente de faire tuer Don Vito, mais celui-ci en réchappe.",
      year : 2012,
      rate : 4,
      
      trailer : <iframe width="1000" height="750" src="https://www.youtube.com/embed/UaVTIH8mujA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
    } ,
    {
      title : "The Shawshank Redemption",
      poster : "https://i.ytimg.com/vi/19THOH_dvxg/movieposter_en.jpg",
      id : uuidv4(),
      description : "En 1947, Andy Dufresne, un jeune banquier, est condamné à la prison à vie pour le meurtre de sa femme et de son amant. Ayant beau clamer son innocence, il est emprisonné à `Shawshank', le pénitencier le plus sévère de l'Etat du Maine. Il y fait la rencontre de Red, un homme désabusé, détenu depuis 20 ans. Commence alors une grande histoire d'amitié entre les deux hommes.",
      year : 2012,
      rate : 5,
      
      trailer : <iframe width="1000" height="750" src="https://www.youtube.com/embed/6hB3S9bIaco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      title : "Green Mile",
      poster : "https://play-lh.googleusercontent.com/hZuesjSWMLsJK9UdfKut2LM4fVk7bfMoaGaRMt6gDR5mJSjv0AlbBUnR7PY0oBkzM1j5eoE9csuESEWzzNY",
      id : uuidv4(),
      description : "Paul Edgecomb, pensionnaire centenaire d'une maison de retraite, est hanté par ses souvenirs. Gardien-chef du pénitencier de Cold Mountain, en 1935, en Louisiane, il était chargé de veiller au bon déroulement des exécutions capitales au bloc E (la ligne verte) en s'efforçant d'adoucir les derniers moments des condamnés. Parmi eux se trouvait un colosse du nom de John Coffey, accusé du viol et du meurtre de deux fillettes.",
      year : 2012,
      rate : 3.5,
      trailer :  <iframe width="1000" height="750" src="https://www.youtube.com/embed/Ki4haFrqSrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
    },
    {
      title : "The Dark Knight",
      poster : "https://cdn.shopify.com/s/files/1/0574/3919/1207/products/91KkWf50SoL._AC_SL1500.jpg?v=1636914739",
      id : uuidv4(),
      description : "Batman est plus que jamais déterminé à éradiquer le crime organisé qui sème la terreur en ville. Epaulé par le lieutenant Jim Gordon et par le procureur de Gotham City, Harvey Dent, Batman voit son champ d'action s'élargir. La collaboration des trois hommes s'avère très efficace et ne tarde pas à porter ses fruits jusqu'à ce qu'un criminel redoutable vienne plonger la ville de Gotham City dans le chaos.",
      year : 2012,
      rate : 4.5,
      
      trailer :  <iframe width="1000" height="750" src="https://www.youtube.com/embed/EXeTwQWrcwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> } ,
    {
      title : "Joker",
      poster : "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Joker_%282019_film%29_poster.jpg/220px-Joker_%282019_film%29_poster.jpg",
      id : uuidv4(),
      description : "Arthur Fleck, comédien raté, rencontre des voyous violents en errant dans les rues de Gotham City déguisé en clown. Méprisé par la société, Fleck s'enfonce peu à peu dans la démence et devient le génie criminel connu sous le nom de Joker, un dangereux tueur psychotique.",
      year : 2012,
      rate : 5,
      trailer : <iframe width="1000" height="750" src="https://www.youtube.com/embed/t433PEQGErc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ,
    },
    {
      title : "Gladiator",
      poster : "https://fr.web.img6.acsta.net/medias/nmedia/18/68/64/41/19254510.jpg",
      id : uuidv4(),
      description : "Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire. Jaloux du prestige de Maximus, et plus encore de l'amour que lui voue l'empereur, le fils de Marc Aurèle, Commode, s'arroge brutalement le pouvoir, puis ordonne l'arrestation du général et son exécution. Maximus échappe à ses assassins, mais ne peut empêcher le massacre de sa famille. Capturé par un marchand d'esclaves, il devient gladiateur et prépare sa vengeance.",
      year : 2012,
      rate : 3.5,
      trailer :<iframe width="1000" height="750" src="https://www.youtube.com/embed/owK1qxDselE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
    }
  ])

  const addMovie = (newMovie) => {
    setMovies ([...movies,newMovie])
  } 

  const search=(text)=>{
    setKeyword(text);
   }
   
   const rating = (number)=>{
    setRate(number)
  }

  // const showDesc = (t)=>{
    
  //   setMovieTrailer(t)

  // }
  return (
    <div className='App'>

      <img src="https://techraptor.net/sites/default/files/styles/image_header/public/2022-06/Moviehouse.jpg?itok=EoWaSLhQ" alt="" className='img' /> 
    <Routes>
      <Route path='/' element = { <> <Filter search={search} rating={rating}/> <AddMovie addMovie={addMovie}/> <MovieList  movies={movies.filter(el=>el.title.toLowerCase().includes(Keyword.toLowerCase().trim()) && el.rate >= rate )}></MovieList>  </>} />
      <Route path='/desc/:id' element={<Desc movies={movies}/>}/>
    </Routes>
    <div className='head'>    
    </div>

    <div> 
         
         
    </div>



    
    </div>
  );
}

export default App