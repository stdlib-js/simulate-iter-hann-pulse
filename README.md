<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# iterHannPulse

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which generates a Hann pulse waveform.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

A Hann pulse waveform is represented by the following equation

<!-- <equation class="equation" label="eq:hann_pulse_waveform" align="center" raw="f(t; T, \tau, a, \varphi) = \begin{cases} \frac{a}{2}\biggl(1-\cos \frac{2\pi (t-\varphi)}{\tau-1}\biggr) & (t-\varphi) \mod T < \tau \\ 0 & \textrm{otherwise} \end{cases}" alt="Equation for a Hann pulse waveform."> -->

```math
f(t; T, \tau, a, \varphi) = \begin{cases} \frac{a}{2}\biggl(1-\cos \frac{2\pi (t-\varphi)}{\tau-1}\biggr) & (t-\varphi) \mod T < \tau \\ 0 & \textrm{otherwise} \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(t; T, \tau, a, \varphi) = \begin{cases} \frac{a}{2}\biggl(1-\cos \frac{2\pi (t-\varphi)}{\tau-1}\biggr) &amp; (t-\varphi) \mod T < \tau \\ 0 &amp; \textrm{otherwise} \end{cases}" data-equation="eq:hann_pulse_waveform">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@08cee6de617d64ec3324479142e1cdf0036898d8/lib/node_modules/@stdlib/simulate/iter/hann-pulse/docs/img/equation_hann_pulse_waveform.svg" alt="Equation for a Hann pulse waveform.">
    <br>
</div> -->

<!-- </equation> -->

where `T` is the pulse period, `τ` is the pulse duration, `a` is the amplitude, and `φ` is the phase offset.

<!-- TODO: add a figure showing a Hann pulse train -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterHannPulse from 'https://cdn.jsdelivr.net/gh/stdlib-js/simulate-iter-hann-pulse@esm/index.mjs';
```

#### iterHannPulse( \[options] )

Returns an iterator which generates a Hann pulse waveform.

```javascript
var it = iterHannPulse();
// returns <Object>

var v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **period**: pulse period (i.e., the number of iterations before a waveform repeats). Default: `100`.
-   **duration**: pulse duration. Must be greater than `2`. Default: `options.period`.
-   **amplitude**: amplitude. Default: `1.0`.
-   **offset**: phase offset (in units of iterations; zero-based). A negative offset translates a waveform to the left. A positive offset translates a waveform to the right. Default: `0`.
-   **iter**: number of iterations. Default: `1e308`.

By default, the function returns an iterator which generates a waveform that repeats every `100` iterations. To specify an alternative period, set the `period` option.

```javascript
var opts = {
    'period': 10
};

var it = iterHannPulse( opts );
// returns <Object>

var v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

// ...
```

By default, the function returns an iterator which generates a waveform that has a duty cycle of `100%` (i.e., the waveform duration equals the waveform period). To specify an alternative duty cycle, set the `duration` option. For example, to generate a waveform having a period of `10` iterations and a `50%` duty cycle,

```javascript
var opts = {
    'period': 10,
    'duration': 5 // 5/10 = 0.50 => 50%
};

var it = iterHannPulse( opts );
// returns <Object>

var v = it.next().value;
// returns 0.0

v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

// ...
```

To adjust at what point the iterator begins in the waveform cycle, set the phase `offset` option. For example, to translate the waveform to the left,

```javascript
var opts = {
    'period': 10,
    'duration': 5,
    'offset': -7
};

var it = iterHannPulse( opts );
// returns <Object>

var v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

// ...
```

To translate the waveform to the right,

```javascript
var opts = {
    'period': 10,
    'duration': 5,
    'offset': 2
};

var it = iterHannPulse( opts );
// returns <Object>

var v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns 0.0

v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

// ...
```

By default, the function returns an infinite iterator (i.e., an iterator which never ends). To limit the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 2
};
var it = iterHannPulse( opts );
// returns <Object>

var v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import iterHannPulse from 'https://cdn.jsdelivr.net/gh/stdlib-js/simulate-iter-hann-pulse@esm/index.mjs';

// Create an iterator:
var opts = {
    'period': 50,
    'duration': 25,
    'amplitude': 10.0,
    'offset': -25,
    'iter': 100
};
var it = iterHannPulse( opts );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/simulate-iter/bartlett-hann-pulse`][@stdlib/simulate/iter/bartlett-hann-pulse]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a Bartlett-Hann pulse waveform.</span>
-   <span class="package-name">[`@stdlib/simulate-iter/pulse`][@stdlib/simulate/iter/pulse]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a pulse waveform.</span>
-   <span class="package-name">[`@stdlib/simulate-iter/sine-wave`][@stdlib/simulate/iter/sine-wave]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sine wave.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/simulate-iter-hann-pulse.svg
[npm-url]: https://npmjs.org/package/@stdlib/simulate-iter-hann-pulse

[test-image]: https://github.com/stdlib-js/simulate-iter-hann-pulse/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/simulate-iter-hann-pulse/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/simulate-iter-hann-pulse/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/simulate-iter-hann-pulse?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/simulate-iter-hann-pulse.svg
[dependencies-url]: https://david-dm.org/stdlib-js/simulate-iter-hann-pulse/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/simulate-iter-hann-pulse/tree/deno
[deno-readme]: https://github.com/stdlib-js/simulate-iter-hann-pulse/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/simulate-iter-hann-pulse/tree/umd
[umd-readme]: https://github.com/stdlib-js/simulate-iter-hann-pulse/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/simulate-iter-hann-pulse/tree/esm
[esm-readme]: https://github.com/stdlib-js/simulate-iter-hann-pulse/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/simulate-iter-hann-pulse/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/simulate-iter-hann-pulse/main/LICENSE

<!-- <related-links> -->

[@stdlib/simulate/iter/bartlett-hann-pulse]: https://github.com/stdlib-js/simulate-iter-bartlett-hann-pulse/tree/esm

[@stdlib/simulate/iter/pulse]: https://github.com/stdlib-js/simulate-iter-pulse/tree/esm

[@stdlib/simulate/iter/sine-wave]: https://github.com/stdlib-js/simulate-iter-sine-wave/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
