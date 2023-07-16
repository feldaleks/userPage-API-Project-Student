
class Renderer {
    
    constructor() {
        //this.data 
    }
    
    render = function (promiseData) {
        //let ([users, quote, pokemon, about]) = promiseData;
        promiseData    
            .then ((result) => {
                let [users, quote, pokemon, about] = result;

                // render "Quote" section
                const sourceQuote = $("#quote-template").html();
                const templateQuote = Handlebars.compile(sourceQuote);
                $(".quote-container").append(templateQuote(quote));

                // render "About me" section
                const sourceAbout = $("#about-template").html();
                const templateAbout = Handlebars.compile(sourceAbout);
                $(".meat-container").append(templateAbout({about: about[0]}));

                // render "user pic and info" section
                const user = {
                    name: users.results[0].name.first,
                    lastName: users.results[0].name.last,
                    city: users.results[0].location.city,
                    state: users.results[0].location.state,
                    img: users.results[0].picture.thumbnail
                }
                const sourceUserInfo = $("#user-template").html();
                const templateUser = Handlebars.compile(sourceUserInfo);
                $(".user-container").append(templateUser(user));

                // render "Friends" section
                const friends = [];
                for (let i=1; i < users.results.length; i++) {
                    friends.push(users.results[i].name.first + " " + users.results[i].name.last);
                }

                const sourceFrinds = $("#friends-template").html();
                const templateFriends = Handlebars.compile(sourceFrinds);
                $(".friends-container").append(templateFriends({friends: friends}));

                // render "Pokemon" section
                let pokemonInfo = {
                    name: pokemon.name,
                    img: pokemon.sprites.default
                }

                const sourcePokemon = $("#pokemon-template").html();
                const templatePokemon = Handlebars.compile(sourcePokemon);
                $(".pokemon-container").append(templatePokemon(pokemonInfo));
            })
        .catch ((error) => console.log(error))     
    }
}