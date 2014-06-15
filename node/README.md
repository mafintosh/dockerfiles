# node docker image

Basic node dockerfile with support for npm install caching and npm start.
Currently it comes with node `0.10.29`.

In addition to doing a `npm install` and `npm run build` it will copy the contents of the build folder to `/root`
If package.json hasn't changed modules won't be redownloaded even though the other app content has changed

Pull it from the docker registry using

```
$ docker pull mafintosh/node
```

An example app is included
