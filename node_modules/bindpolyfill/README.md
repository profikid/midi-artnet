# Bind Polyfill

Install it

```
$ npm install bindpolyfill
```

Use it

```
require('bindpolyfill');

function func() {
    // Does things
}

func.bind(whatever);
```

Polyfill code from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
