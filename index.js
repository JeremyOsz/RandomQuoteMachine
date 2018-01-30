$(document).ready(function() {

  document.getElementById('getQuote').addEventListener('click', getQuote);

  function getQuote() {
    $.getJSON({
        url: 'https://random-quote-generator.herokuapp.com/api/quotes/random',
        dataType: 'json'
      }).done((data) => {
        console.log(data)
        changeQuote(data)
      })
      .fail((err) => {
        console.log(err)
      });
  };
});

function changeQuote(data){
  document.getElementById('quotetext').innerHTML = "\"" + data.quote + "\"";
  document.getElementById('quoter').innerHTML = data.author;
}
