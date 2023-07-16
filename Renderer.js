
class Renderer {
    
    constructor() {
        //this.data 
    }
    
    render = function (promiseData) {
        //let ([users, quote, pokemon, about]) = promiseData;
        promiseData    
        .then ((result) => {
            let [users, quote, pokemon, about] = result;
            const sourceQuote = $("#quote-template").html();
            const templateQuote = Handlebars.compile(sourceQuote);
            $(".quote-container").append(templateQuote(quote))
        })
        .catch ((error) => console.log(error))     
    }
}