# Analysis of Pokemon

In this assignment, I had to utilize a dataset of interest (in this case, Pokemon) and performed exploratory analysis to better understand the shape & structure of the data, identify data quality issues, investigate initial questions, and develop preliminary insights & hypotheses.

Dataset link: https://github.com/shahinrostami/pokemon_dataset/blob/master/pokemon_gen_1_to_8.csv

Observable link: https://observablehq.com/@the-shy7/cse-412-homework-2@459

View this notebook in your browser by running a web server in this folder. For
example:

~~~sh
python -m SimpleHTTPServer
~~~

Or, use the [Observable Runtime](https://github.com/observablehq/runtime) to
import this module directly into your application. To npm install:

~~~sh
npm install @observablehq/runtime@4
npm install https://api.observablehq.com/d/6847fad33738c3c7.tgz?v=3
~~~

Then, import your notebook and the runtime as:

~~~js
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "@the-shy7/cse-412-homework-2";
~~~

To log the value of the cell named “foo”:

~~~js
const runtime = new Runtime();
const main = runtime.module(define);
main.value("foo").then(value => console.log(value));
~~~
