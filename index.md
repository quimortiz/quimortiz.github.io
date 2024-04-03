---
layout: default
---



**Recent Update**: I defended my PhD in January 2024! Check out the <a href="/assets/phd_thesis.pdf">thesis</a> and the presentation <a href="/assets/phd_slides.pdf">slides</a>. I am now a Postdoc researcher at New York University working with Prof. Ludovic Righetti (Machines in Motion Laboratory).


Hello!

I am Joaquim Ortiz-Haro, a PhD student in robotics at the Technical University of Berlin ([TUB](https://www.tu.berlin/)) and the International Max-Planck Research School for Intelligent Systems ([IMPRS-IS](https://imprs.is.mpg.de/)). My advisor is [Marc Toussaint](https://www.user.tu-berlin.de/mtoussai/index.html) in the research group [Learning and Intelligent Systems](https://argmin.lis.tu-berlin.de/). My research interesets are in Task and Motion Planning, optimization and deep learning for robotics.

{% comment %} [University of Stuttgart](https://www.uni-stuttgart.de/en/) {% endcomment %}

I studied Mechanical Engineering (Bachelor) and Mathematics (Master) at the Polytechnic University of Catalonia ([UPC](https://www.upc.edu/en?set_language=en), Barcelona). 

Before starting the PhD, I worked in different projects ranging from convex optimization and machine learning to localization and mapping in robotics, in collaboration with Gergely Neu (UPF), Nicolas Mansard (LAAS-CNRS), Bharath Sankaran (Scaled Robotics) and Joan Sola (IRI). 

<!-- <div style="text-align: center;"> -->
<!-- <img src="{{site.url}}/images/20210103_170909.jpeg" style="width: 40%;"> -->
<!-- </div> -->



See my [Research]({{ site.baseurl }}{% link research.md %}) and [CV]({{ site.baseurl }}{% link cv.md %}).



Feel free to contact me if you are interested in collaborations or doing a MSc Thesis in our group (priority will be given to students enrolled at TU Berlin). I currently have several open MSc projects to combine nonlinear optimization/motion planning with supervised/reinforcement learning in robotics.

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










