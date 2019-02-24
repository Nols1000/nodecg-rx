# NodeCG-RX

NodeCG-RX is a wrapper for NodeCG-Replicants. It supports wrapping NodeCG-Replicants in RxJS-Observables or RxJS-Subjects.

## Installation

Use the package manager [npm](https://www.npmjs.com) to install this project.

```bash
npm install --save nodecg-rx
```

## Usage

Use `ReplicantObservable` to wrap a `Replicant` into an `Observable`.

```typescript
const observable = new ReplicantObservable<any>(nodecg.Replicant('observable'));
```

Use `ReplicantSubject` to wrap a `Replicant` into a `Subject`.

```typescript
const subject = new ReplicantSubject<any>(nodecg.Relicant('subject'));
```

## Building

Use the `build` script to build this project.

```bash
npm run build
```

## Testing

Use the `test` script to build this project.

```bash
npm run test
```

## Built With

* [microbundle](https://www.npmjs.com/package/microbundle) - a zero-configuration bundler for tiny modules, powered by [Rollup](https://rollupjs.org/guide/en)
* [RxJS](https://rxjs.dev/) - a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code
* [NodeCG](https://nodecg.com) - a broadcast graphics framework and application

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Versioning

This project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/nols1000/nodecg-rx/tags). 

## License

This project is licensed under [LGPL-3.0](https://www.gnu.org/licenses/lgpl-3.0.html).