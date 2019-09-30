# parse-duration

  Parses duration strings into milliseconds

## Installation

Browserify/NPM

```sh
    $ npm install --save gm-parse-duration
```

```js
  var parse = require('gm-parse-duration');
```

Component

```sh
    $ component install charlottegore/parse-duration
```

```js
  var parse = require('parse-duration');
```

## API

     var parse = require('parse-duration');
     
     parse(1000) === 1000; 
     parse('100ms') === 100;
     parse('100s') === 6000000;
     ...

  And so on. Supports ms (miliseconds), s (seconds), m (minutes), h (hours), d (days) and w (weeks).

## License

  MIT
