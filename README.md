# Tabula Rasa

[![Build Status](https://travis-ci.org/sdellis/tabula-rasa.svg?branch=master)](https://travis-ci.org/sdellis/tabula-rasa)

Tabula Rasa is a Node.js SDK (aka, "starter kit") for working with IIIF Presentation API resources (i.e., collections, manifests, canvases, etc.).

It was originally developed as a base library for [Tabula](https://github.com/sdellis/tabula), which can be used to create all sorts of useful native web apps that work with IIIF APIs. However, it can just as easily be used on the server to create and edit IIIF Presentation API resources.  

## About Tabula Rasa
Tabula Rasa is written in ES2015 and transpiled down to good old JavaScript (ES5) so that it can be distributed as an npm module and run in web browsers. Similar Presentation API SDKs exist for other languages:

* [IIIF-Prezi](http://github.com/IIIF/iiif-prezi/) (Python)
* [osullivan](http://github.com/IIIF/osullivan/) (Ruby)
* [Manifesto](https://github.com/UniversalViewer/manifesto) (TypeScript) _currently read-only_

Tabula Rasa has a few additional features that distinguish it from the libraries listed above.  You may find these helpful, depending on your needs.

### Play nice with RESTful APIs
Because Tabula Rasa collections and models are based on Ampersand/Backbone, we get fetch() and save() methods on all our objects. The ability to create IIIF resources from external endpoints comes in handy in a variety of scenarios.  For example, you can easily test your application against the current collection of official fixtures from the IIIF website.  You can also easily edit  IIIF resources from any endpoint (and save them back if the endpoint supports it), or even stitch resources together from multiple endpoints. Finally, you can easily migrate data from one system to another.

### Object Observability
The IIIF Presentation API is intended for front-end use.  Native Web applications need to manage the state of both objects, and the interfaces used to manipulate these objects.  Observability is the best way to separate concerns when managing state and, again, as an extension of Ampersand models and collections (which are extensions of ampersand-state), Tabula Rasa objects and models emit a JavaScript event when they are changed. This makes it easy to know when to update any views in your application.

### Node.js: Frontend and Backend
npm (along with its command line tool, the npm-client) is the official package manager for node.js, but it works great for client-side JavaScript too. It helps you publish, consume, and manage modules of JavaScript code in your applications.

commonjs modules are a specification and implementation of a module system in JavaScript. They allow you to separate functionality into separate files or npm modules, that can then require each other. This makes it much easier to break the functionality of your application up into smaller chunks, that can depend on each other, rather than writing your code in one giant file.

You can use tools like Browserify or Webpack that take an application written with commonjs and npm modules, and bundle it up into a single file, that you can then use in a browser.

## Getting Started
If you want to use the good old Javascript version, simply include it in your project by installing the npm module:
```
npm install --save tabula-rasa
```
If you want to include it in your ES2015 project then, point to the ES6 release on GitHub as one of your package.json dependencies:
```
"dependencies": {
    "tabula-rasa": "https://github.com/sdellis/tabula-rasa/archive/es6-1.0.2.tar.gz"
  }
```

## Usage
Once it's installed, you can include it and start building IIIF Presentations.  See below for details, or play with it on the web a the [Tabula Rasa Tonic demo](https://tonicdev.com/sdellis/tabula-rasa-demo).
```
var Presentation = require("tabula-rasa")

// create a collection
var c = new Presentation.Collections.Collection()

// create sub-collections
var c1 = new Presentation.Collections.Collection( { _id: 'c1', '@id': 'https://somedomain.com/c1', label: "Collection 1" } )
var c2 = new Presentation.Collections.Collection( { _id: 'c2', '@id': 'https://somedomain.com/c2', label: "Collection 2" } )
var c3 = new Presentation.Collections.Collection( { _id: 'c3', '@id': 'https://somedomain.com/c3', label: "Collection 3" } )

// add sub collections to the first collection
c.collections.add([c1,c2])

// add a sub-collection to a sub-collection
c.collections.get('c1').collections.add([c3])

// add some manifests to the root collection
c.manifests = new TabulaRasa.ManifestList()

c.manifests.add([
  { _id: 'foo', '@id': 'bar', label: 'Manifest 1'},
  { _id: 'fez', '@id': 'baz', label: 'Manifest 2'}
])

// get manifest by internal id and by json-ld @id
console.log(c.manifests.get('foo').label) //=> 'Manifest 1'
c.manifests.get('baz', '@id').label //=> 'Manifest 2'

// fetch from an endpoint (works in browser console, but requires promises to implement)
c.url = 'http://iiif.io/api/presentation/2.0/example/fixtures/collection.json'
c.fetch()
console.log(c.manifests.get('http://iiif.io/api/presentation/2.0/example/fixtures/1/manifest.json', '@id').label[0]['@value']) //=> 'Test 1 Manifest: Minimum Required Fields'
```

## Tests
Tabula Rasa uses [Standard](http://standardjs.com/) to enforce a simple code style. Unit tests are run with [Tape](https://github.com/substack/tape).
```
npm test
```

## Contribute
This library is fairly new. Please report bugs and/or contribute fixes. If you would like to contribute a pull request, you will need to make sure you create the appropriate tests and adhere to the [standard]() style guide.
