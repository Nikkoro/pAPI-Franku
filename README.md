# pAPI-Franku

API for getting quotes from the Filthy Frank Omniverse

## Base url

```
https://papi-franku.onrender.com/api/
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

Example: https://papi-franku.onrender.com/api/quotes/35

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

Example: https://papi-franku.onrender.com/api/quotes/author/Filthy%20Frank

## Random Quote

Get random quote

```
/quote
```

Example: https://papi-franku.onrender.com/api/quote

```json
{
  "id": 34,
  "author": "Filthy Frank",
  "quote": "Sometimes it's hard to open a jar, yeah, sometimes it's hard to clean the sink"
}
```
