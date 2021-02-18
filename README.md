# wmr-app

## Bug

Parsing error 
`Uncaught SyntaxError: Unexpected token '<'` 💩

Lapidary writing style seems to break the parsing step:

```<Route path="/home"><Home/></Route>``` is breaking it

```<Route path="/home"> <Home/> </Route>``` isn't

(that's the `public/components/App.tsx` 9th line of code)


## Reproduction

Clone the repo

`npm i`

`npm run start`

Open `http://localhost:8080`

Check the console, the error is there

___
___
___
Bonus: 

`GET http://localhost:8080/assets/style.module.7b16dcc3.css net::ERR_ABORTED 404 (Not Found)` when `npm run build` `npm run serve`
