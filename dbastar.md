---
layout: page_without_header
title: "iDb-A*: Iterative Search and Optimization for Optimal Kinodynamic Motion Planning"
permalink: /idbastar/
---


<style>

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

</style>


[Joaquim Ortiz-Haro](https://quimortiz.github.io/), [Wolfgang Honig](https://whoenig.github.io/), [Valentin Hartmann](https://vhartmann.com/), and [Marc Toussaint](https://www.user.tu-berlin.de/mtoussai/)


**Back to personal webpage**: <a href="{{ site.baseurl }}{% link research.md %}">here</a>


## TL;DR

Iterative Discontinuity Bounded A\* (iDb-A\*) is a new kinodynamic motion planner that combines search and optimization in an iterative way. It is asymptotically optimal and faster than state-of-the-art motion planners in a wide range of problems with car-like and flying robots.

## Paper 

 <a href="https://arxiv.org/abs/2311.03553"><img src = "{{ site.baseurl }}/images/pdf-svgrepo-com.svg" style="max-width: 3%; height:auto;  vertical-align:middle   "></a>
  <span style=""> Journal Version -- Preprint submitted to IEEE Transactions on Robotics (T-RO) in November  2023 (Recommended)</span>

 <a href="https://arxiv.org/abs/2203.11108"><img src = "{{ site.baseurl }}/images/pdf-svgrepo-com.svg" style="max-width: 3%; height:auto;  vertical-align:middle   "></a>
  <span style=""> Conference Paper (IROS 2022) </span>


## Code

<div>
 <a href="https://github.com/quimortiz/dynoplan"><img src = "{{ site.baseurl }}/images/github.svg" alt="My Happy SVG" style="max-width: 3%; height:auto;  vertical-align:middle   "></a>
  <span style=""> Dynoplan :t-rex:</span>
</div>

<img  src="/assets/example1.png"  class="center"/>

<div>
 <a href="https://github.com/quimortiz/dynobench"><img src = "{{ site.baseurl }}/images/github.svg" alt="My Happy SVG" style="max-width: 3%; height:auto;  vertical-align:middle   "></a>
  <span style=""> Dynobench :t-rex:</span>
</div>



<img  src="/assets/dynobench.png"  class="center" style="width: 40%" />

## Supplementary Video

<iframe width="300" height="400" class="center"  src="https://www.youtube.com/embed/tGuPuihXSbg" frameborder="0" allowfullscreen></iframe>



## Abstract


Motion planning for robotic systems with complex dynamics is a challenging problem.
While recent sample-based algorithms achieve asymptotic optimality by propagating random control inputs, their empirical convergence rate is poor, specially in high-dimensional systems such as multirotors.
An alternative approach is to first plan with a simplified geometric model and then use trajectory optimization to follow the geometric path while accounting for the true dynamics.
This approach is incomplete, often failing to produce valid motion plans, and requires in-depth knowledge of each dynamical system.

In this paper, we present Iterative Discontinuity Bounded A\* (iDb-A\*), a new kinodynamic motion planner that combines search and optimization in an iterative way.
The search step uses a finite set of short trajectories (motion primitives) that are connected while allowing a bounded discontinuity, and the optimization step locally repairs the discontinuities with trajectory optimization.
By iteratively reducing the allowed discontinuity and adding more motion primitives, our algorithm achieves asymptotic optimality with a very good any-time behaviour.
We provide a benchmark of 43 problems with 8 different dynamical systems, including different versions of unicycles and multirotors.
Compared to the state-of-the-art, iDb-A\* consistently solves more problem instances and finds lower-cost solutions faster.





## Dynobench :t-rex:

Dynobench 🦖 is a universal benchmark for kinodynamic motion planning. Develop, combine and compare different methods, from trajectory optimization and sample based motion planning to supervised and reinforcement learning. We currently support 8 dynamical Systems, and a total of 43  problems! (more to come!)




## Dynoplan :t-rex:

Dynoplan is a small library for solving kinodynamic motion planning problems, as defined in Dynobench :t-rex:. It implements 3 different algorithms: Trajectory Optimization with geometric initial guess , Sample based Motion Planning, and Iterative Search and Optimization (iDb-A\*).







## Motion Primitives

All the motion primitives are available in Github and Google Drive (check instructions in [Dynobench](https://github.com/quimortiz/dynobench))

<img  src="/images/primitives-quad2dpole.png"   class="center"/>
<img  src="/images/primitives-unicycle1.png"  class="center"/>
<img  src="/images/primitives-acrobot.png"  class="center"/>



## Extended results 

We compare iDb-A* against SST* (sample-based optimal kynodynamic motion planner) and RRT* -TO (Combination of Asymptotically Optimal Geometric Planner with Trajectory Optimization). Check our paper 
for full results and discussion. These results can be reproduced using our code [Dynoplan](https://github.com/quimortiz/dynoplan)

### Benchmark

<img  src="/assets/merged_2023-11-06--21-03-18.tex.nice.tex.pdf-1.png" class="center"/>

### Trajectory Optimization with Free Terminal Time

<img  src="/assets/summary_timeopt_2023-11-06--09-50-56.tex.pdf-1.png" class="center"/>


### Heuristic Functions

<img  src="/assets/summary_search_2023-11-06--09-39-23.tex.pdf.png-1.png" class="center"/>



### Analysis of Underlying Optimization Algorithm (Single vs Multiple Shooting)

We repeat the benchmark using a multiple shooting formulation and Sequential Quadratic Programming for the trajectory optimization step of iDb-A* (instead of Differential Dynamic Programming). The suffix "-m" indicates that we use a multiple shooting solver instead of Differential Dynamic Programming. This benchmark was run on an Intel i9-14900KF CPU.

<a href="./assets/tro_new/merged_2024-08-07--15-47-40.tex.nice.tex.pdf">Link to PDF</a>

<!--<img src="/assets/tro_new/merged_2024-08-06--14-15-05.tex.nice.tex.pdf-1.png" class="center"/>-->

### Convergence Plots for all Problems

We provide the convergence plots for all problems, which display the median of the cost and success rate over 20 runs, with a 95% confidence interval, which provides a clear view of the variance of the different algorithms. This results correspond to the table shown above (Intel i9-14900KF CPU).
<a href="./assets/tro_new/plot_2024-08-07--15-49-11.pdf">Link to PDF</a>.
