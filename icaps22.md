---
layout: page_without_header
title: Conflict-Directed Diverse Planning for Logic-Geometric Programming 
permalink: /ConflictPlanningLGP/
---

Joaquim Ortiz de Haro, Erez Karpas, Marc Toussaint and Michael Katz. 

International Conference on Automated Planning and Scheduling (ICAPS) 2022

**Back to personal webpage**: <a href="{{ site.baseurl }}{% link research.md %}">here</a>



**Paper:** <a href="https://ojs.aaai.org/index.php/ICAPS/article/view/19811/19570">here</a>

<div style="font-size:0">
<img  src="/assets/icaps21-1.jpg" width="20%" height="auto" />
<img  src="/assets/icaps21-2.jpg" width="20%" height="auto" />
<img  src="/assets/icaps21-3.jpg" width="20%" height="auto" />
<img  src="/assets/icaps21-4.jpg" width="20%" height="auto" />
<img  src="/assets/icaps21-5.jpg" width="20%" height="auto" />
<img  src="/assets/icaps21-6.jpg" width="20%" height="auto" />
<img  src="/assets/icaps21-7.jpg" width="20%" height="auto" />
<img  src="/assets/icaps21-8.jpg" width="20%" height="auto" />
<img  src="/assets/icaps21-9.jpg" width="20%" height="auto" />
</div>

 




**Brief:**

We propose a systematic interface between state-of-the-art symbolic planners and nonlinear constrained optimization methods to solve Logic-Geometric Programs. The key idea of our approach is to efficiently identify geometric conflicts in the form of minimal infeasible action prefixes, and incorporate this information back into the symbolic planner through a multi-prefix forbidding compilation. 

**Abstract:**

Robots operating in the real world must combine task planning for reasoning about what to do with motion planning for reasoning about how to do it -- this is known as task and motion planning. One promising approach for task and motion planning is Logic Geometric Programming (LGP) which integrates a logical layer and a geometric layer in an optimization formulation. The logical layer describes feasible high-level actions at an abstract symbolic level, while the geometric layer uses continuous optimization methods to reason about motion trajectories with geometric constraints. 
In this paper we propose a new approach for solving task and motion planning problems in the LGP formulation, that leverages state-of-the-art diverse planning at the logical layer to explore the space of feasible logical plans, and minimizes the number of optimization problems to be solved on the continuous geometric layer.
To this end, geometric infeasibility is fed back into planning by identifying prefix conflicts and incorporating this back into the planner through a novel multi-prefix forbidding compilation. We further leverage diverse planning with a new novelty criteria for selecting candidate plans based on the prefix novelty, and a metareasoning approach which attempts to extract only useful conflicts by leveraging the information that is gathered in the course of solving the given problem.

**Supplementary video:**

<iframe width="300" height="300"  src="http://www.youtube.com/embed/7Ev6zNbqdjo" frameborder="0" allowfullscreen></iframe>
<br>

**Slides:** <a href="/assets/icaps21_slides.pdf">here</a>

<div style="font-size:0">
<img  src="/assets/icaps21_slides-01.jpg"  width="50%" height="auto" />
<img  src="/assets/icaps21_slides-33.jpg"  width="50%" height="auto" />
</div>

**Poster:** <a href="/assets/icaps21_poster.pdf">here</a>

<img  src="/assets/icaps21_poster-1.jpg" width="30%" height="auto" />

**Funding**

This research was supported by the German-Israeli Foundation for Scientific Research (GIF) grant I-1491-407.6/2019, the German Research Foundation (DFG) under Germany’s Excellence Strategy EXC 2002/1–390523135 "Science of Intelligence", and the International Max-Planck Research School for Intelligent Systems (IMPRS-IS).  
