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
  width: 50%;
}

</style>

Hi!

Joaquim Ortiz de Haro, Wolfgang Honig, Valentin Hartmann and Marc Toussaint

Submission to IEEE Transactions on Robotics (T-RO)

**Back to personal webpage**: <a href="{{ site.baseurl }}{% link research.md %}">here</a>


## TL;DR

Iterative Discontinuity Bounded A\* (iDb-A\*) is a new kinodynamic motion planner that combines search and optimization in an iterative way. It is asymptoticaly optimal and faster than state-of-the-art motion planners in a wide range of problems with car-like and flying robots.

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





## Code


<div>
 <a href="https://github.com/quimortiz/dynoplan"><img src = "{{ site.baseurl }}/images/github.svg" alt="My Happy SVG" style="max-width: 3%; height:auto;  vertical-align:middle   "></a>
  <span style=""> Dynoplan :t-rex:</span>
</div>


<img  src="/assets/example1.png" width="40%" height="auto" class="center"/>


<div>
 <a href="https://github.com/quimortiz/dynobench"><img src = "{{ site.baseurl }}/images/github.svg" alt="My Happy SVG" style="max-width: 3%; height:auto;  vertical-align:middle   "></a>
  <span style=""> Dynobench :t-rex:</span>
</div>



<img  src="/assets/dynobench.png" width="40%" height="auto" class="center" />



<!-- <a href="https://github.com/imrCLab/kinodynamic-motion-planning-benchmark"><img src = "{{ site.baseurl }}/images/github.svg" alt="My Happy SVG" style="max-width: 5%; height:auto;"></a> -->
<!-- <!-- <img src = "{{ site.baseurl }}/_data/github.svg" alt="My Happy SVG"/> --> -->


## Benchmark

Dynobench: a Universal Benchmark for Kinodynamic Motion Plannings.

8 Dynamical Systems

Different instances (start, goal and obstacles)

Total of 43  problems!


Check our Benchmark in

<div>
 <a href="https://github.com/quimortiz/dynobench"><img src = "{{ site.baseurl }}/images/github.svg" alt="My Happy SVG" style="max-width: 3%; height:auto;  vertical-align:middle   "></a>
  <span style=""> Dynobench :t-rex:</span>
</div>



## Motion Primitives

Motion primitives are available in 














<!---->
<!-- <a href="{{ site.baseurl }}{% link research.md %}">here</a> -->
<!---->
<!---->
<!---->
<!-- **Back to personal webpage**: <a href="{{ site.baseurl }}{% link research.md %}">here</a> -->
