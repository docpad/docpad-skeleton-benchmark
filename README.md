# Benchmarking Skeleton for [DocPad](https://github.com/bevry/docpad)

You have two options for seeing the benchmarks:

[View the last result on Travis CI](https://travis-ci.org/docpad/docpad-skeleton-benchmark)

## Usage

```bash
git clone https://github.com/docpad/docpad-skeleton-benchmark.git
cd docpad-skeleton-benchmark
npm install
npm test
```

If you want to profile the performance issues also, install the [cpuprofiler plugin](https://github.com/pflannery/docpad-plugin-cpuprofiler):

```bash
docpad install cpuprofiler
```

## Results

- docpad 6.78.3 rendered 1000 eco 2.2.1 documents with layout in 47.92 seconds
- docpad 6.83.1 rendered 1000 eco 2.5.0 documents with layout in 6.363 seconds
