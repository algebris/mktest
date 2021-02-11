# Test work

## Features

* Material UI standartized approach
* Provides themes out of the box
* Provides languages out of the box
* Keyboard support
* Dynamic display font adaptation
* Decimal.js provides correct decimals calculation e.g. 0.1 * 0.2 = 0.02
* API documentation out of the box

Demo site: http://calc.onsib.ru (drop me a message if this host is down)
## Specification

Despite the simplicity of initial requirements, I implemented architecture that I used for the large projects.


## Installation

```
git clone git@github.com:algebris/mktest.git
npm install
```

Create .env in root directory
```
API_PORT=4000
API_URL=http://localhost:3000/
```

### Description:

API_PORT - default port for API binding

API_URL - which URL client will perform in order to get API


1. Bring up API
```
npm run server
```

2. Client side
```
npm start
```


