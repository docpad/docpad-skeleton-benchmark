# Benchmarking Skeleton for [DocPad](https://github.com/bevry/docpad)

You have two options for seeing the benchmarks:

[View the last result on Travis CI](https://travis-ci.org/docpad/docpad-skeleton-benchmark)

Or run locally:

``` shell
git clone https://github.com/docpad/docpad-skeleton-benchmark.git
cd docpad-skeleton-benchmark
npm install
npm run-script compile
npm test
```

When running locally, if you want to profile the performance issues also, install the [cpuprofiler plugin](https://github.com/pflannery/docpad-plugin-cpuprofiler):

``` shell
docpad install cpuprofiler
```
