const api = new APIManager();
//api.initialise();
//console.log(api);

const renderer = new Renderer();

Handlebars.registerHelper("properCase", function(text) {
    //let text = 'one two three';
    let words = text.data.root.name.split('-');

    capitalizedWords = words.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
    capitalizedText = capitalizedWords.join('-');

    return capitalizedText;
  });

function generateUser(){
    $(".user-container").empty();
    $(".quote-container").empty();
    $(".pokemon-container").empty();
    $(".meat-container").empty();
    //$("#friends-list").empty();
    $(".friends-container").empty();
    //let userObject = renderer.getUserObject(api.initialise());
    renderer.render(api.initialise());
}