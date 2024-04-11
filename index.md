---
layout: default
---

**Latest News**: I successfully defended my PhD in January 2024! 
For an in-depth look, check out my <a href="/assets/phd_thesis.pdf">thesis</a> and the presentation <a href="/assets/phd_slides.pdf">slides</a>.
I'm excited to continue my research journey as a Postdoc researcher at New York University, working with Prof. Ludovic Righetti in the Machines in Motion Laboratory.

====

Hello! I am Joaquim Ortiz-Haro, a Postdoc researcher at New York University (NYU), working with Prof. Ludovic Righetti in the Machines in Motion Laboratory.

I recently completed my PhD in robotics at the Technical University of Berlin ([TUB](https://www.tu.berlin/)) under the supervision of [Marc Toussaint](https://www.user.tu-berlin.de/mtoussai/index.html) in the research group [Learning and Intelligent Systems](https://argmin.lis.tu-berlin.de/). My research interests are in Task and Motion Planning, optimization, and deep learning for robotics.

I studied Mechanical Engineering (Bachelor) and Mathematics (Master) at the Polytechnic University of Catalonia ([UPC](https://www.upc.edu/en?set_language=en), Barcelona). As an undergrad student, I worked on different projects ranging from convex optimization and machine learning to localization and mapping in robotics, in collaboration with Gergely Neu (UPF), Nicolas Mansard (LAAS-CNRS), Bharath Sankaran (Scaled Robotics), and Joan Solà (IRI).

Feel free to contact me if you are interested in collaborations or doing a MSc Thesis or research internship in our group. I am interested in projects on: A) merging nonlinear optimization and motion planning with supervised or reinforcement learning in robotics; B) closing the gap between task and motion planning and model predictive control.

Email: quimortiz21 (at) gmail (dot) com


<div style="text-align: center">
<img src="{{ site.baseurl }}/images/WhatsApp Image 2022-12-09 at 18.03.44_nologo.jpeg" alt="drawing" width="40%" style="border-radius:20px" />
</div>

## News


<style>
  .when { color: gray; }

</style>





{% assign news = site.data.news %}
{% if news %}
<ul style="list-style: none;">
{% for new in news.news %}
<li>
<span  class="when"> {{new.when}} </span> <span  class="what"> {{new.what}} </span>
</li>
{% endfor %}
</ul>
{% endif %}










