<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
    body {
        font-family: 'Roboto Mono', monospace;
        max-width: max-content;
        margin: auto;
    }
    pre {
        display: inline-block;
        background-color: #f8f8f8;
        border: 1px solid #acaaaa;
        margin-top: 1.5em;
        margin-bottom: 1.5em;
        margin-right: 1.5em;
        padding: 0.125rem 0.3125rem 0.0625rem;
         }
    #wrapper {
        
        background-color: #f8f8f8;
        border: 1px solid #acaaaa;
        margin-top: 1.5em;
        margin-bottom: 1.5em;
        margin-right: 1.5em;
        padding: 0.125rem 0.3125rem 0.0625rem;
        max-width: 650px;
         }

</style>

# pAPI-Franku

API for getting quotes from the Filthy Frank Omniverse

## Base url

```
https://papi-franku.herokuapp.com/api/
```

## All quotes

Get all quotes from omniverse

```
/quotes
```

## Quote by id

Get quote by id

```
/quotes/[id]
```

Example: https://papi-franku.herokuapp.com/api/quotes/35

```json
[
  {
    "id": 35,
    "author": "Filthy Frank",
    "quote": "Ravioli, Ravioli, what's in the pocket-oli?"
  }
]
```

## Quote by author

Get quotes by author

```
/quotes/author/[author]
```

Example: https://papi-franku.herokuapp.com/api/quotes/author/Filthy%20Frank

## Random Quote

Get random quote

```
/quote
```

<div id="wrapper">
<div id="quote"> 
</div> 
<div id="author"> 
</div> 
</div>
<button id="random-quote" type="button"> 
        Get random quote!  
</button>

Example: https://papi-franku.herokuapp.com/api/quote

```json
{
  "id": 34,
  "author": "Filthy Frank",
  "quote": "Sometimes it's hard to open a jar, yeah, sometimes it's hard to clean the sink"
}
```

<script>
const randomQuote = document.querySelector("#random-quote");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

quote.innerHTML = "Sometimes it's hard to open a jar, yeah, sometimes it's hard to clean the sink"
author.innerHTML = "~ Filthy Frank"


randomQuote.addEventListener("click", () => {
    fetch("https://papi-franku.onrender.com/api/quote")
        .then((response) => response.json())
        .then((data) => {
            quote.innerHTML = data.quote;
            author.innerHTML = `~ ${data.author}`;
        });
});
</script>
