---
layout: page_without_header
title: "iDb-RRT: Sampling-based Kinodynamic Motion Planning with Motion Primitives and Trajectory Optimization"
permalink: /idbrrt/
---


<style>

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

</style>




[Joaquim Ortiz-Haro](https://quimortiz.github.io/), [Wolfgang Honig](https://whoenig.github.io/), [Valentin Hartmann](https://vhartmann.com/), [Marc Toussaint](https://www.user.tu-berlin.de/mtoussai/), and [Ludovic Righetti](https://engineering.nyu.edu/faculty/ludovic-righetti)


**Back to personal webpage**: <a href="{{ site.baseurl }}{% link research.md %}">here</a>

<a href="https://arxiv.org/abs/2403.10745"> Preprint</a>

Code: <a href= "https://github.com/quimortiz/dynoplan"> Dynoplan</a> <a href= "https://github.com/quimortiz/dynobench"> Dynobench</a>. Small tutorial coming soon!

## TL;DR

iDb-RRT is an advanced kinodynamic motion planning algorithm that enhances the Rapidly-exploring Random Trees (RRT) framework by integrating motion primitives and trajectory optimization. This new approach, building on our previous Iterative Discontinuity Bounded A* (iDb-A*) method, significantly improves the efficiency and speed of finding collision-free paths in robotics. Tested across various systems and scenarios, iDb-RRT demonstrates up to a tenfold increase in performance compared to previous methods.


## Abstract

Rapidly-exploring Random Trees (RRT) and its variations have emerged as a robust and efficient tool for finding collision-free paths in robotic systems. However, adding dynamic constraints makes the motion planning problem significantly harder, as it requires solving two-value boundary problems (computationally expensive) or propagating random control inputs (uninformative). Alternatively, Iterative Discontinuity Bounded A* (iDb-A*), introduced in our previous study, combines search and optimization iteratively. The search step connects short trajectories (motion primitives) while allowing a bounded discontinuity between the motion primitives, which is later repaired in the trajectory optimization step.
Building upon these foundations, in this paper, we present iDb-RRT, a sampling-based kinodynamic motion planning algorithm that combines motion primitives and trajectory optimization within the RRT framework. iDb-RRT is probabilistically complete and can be implemented in forward or bidirectional mode. We have tested our algorithm across a benchmark suite comprising 30 problems, spanning 8 different systems, and shown that iDb-RRT can find solutions up to 10x faster than previous methods, especially in complex scenarios that require long trajectories or involve navigating through narrow passages. 


## Supplementary Video

<iframe width="300" height="400" class="center"  src="https://www.youtube.com/embed/3ToQU-qLWg0" frameborder="0" allowfullscreen></iframe>


## Supplementary Material for IROS Submission

We have evaluated our new algorithms, iDB-RRT-F and iDB-RRT-C, against three state-of-the-art methods for kinodynamic motion planning. Due to space constraints, in the submitted paper we only report the median of the compute time and the cost across 20 runs of each algorithm. Here, we plot the compute time and cost using box plots, which provide a graphical representation of the variance of each algorithm. Results are available in the following <a href="/assets/merged_boxplots_2024-03-15.pdf">PDF</a>, where we display one problem per page.








