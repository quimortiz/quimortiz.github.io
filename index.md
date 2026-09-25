---
layout: default
---

I am a Research Scientist at Helsing AI (formerly Keybotic) in Barcelona, where I work on deep reinforcement learning for robotic locomotion. Previously, I was a Postdoctoral Researcher in Robotics at New York University (NYU) in the Machines in Motion Laboratory, supervised by Prof. Ludovic Righetti. My research interests include locomotion, task and motion planning, control, and deep learning for robotics. I received my PhD in Robotics from TU Berlin, supervised by Prof. Marc Toussaint.

Email: quimortiz21 (at) gmail (dot) com

## News


<style>
  .when { color: gray; }
  .year { margin-top: 1.5em; margin-bottom: 0.5em; }
</style>


{% assign news = site.data.news %}
{% if news %}
{% assign last_year = "" %}
<ul style="list-style: none; padding-left: 0;">
{% for new in news.news %}
{% assign year = new.when | split: '/' | last %}
{% if year != last_year %}
<li class="year"><h3>{{ year }}</h3></li>
{% assign last_year = year %}
{% endif %}
<li>
<span  class="when"> {{new.when}} </span> <span  class="what"> {{new.what}} </span>
</li>
{% endfor %}
</ul>
{% endif %}










