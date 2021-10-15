---
layout: jekyll-cv/default
title: CV
permalink: /CV/
---

<div class="container">
  {% include jekyll-cv/header.html %}
  <div class="container-block">
    <div class="sidebar">
      {% include _cv_contact.html %}
      {% include _cv_languages.html %}
      {% include _cv_education.html %}
      {% include _cv_skills.html %}
      {% include _cv_fork.html %}
    </div>

    <div class="main">
      {% include _cv_career-profile.html %}
      {% include _cv_experience.html %}
      {% include _cv_publications.html %}
      {% include _cv_projects.html %}
      {% include _cv_volunteering.html %}
    </div>
  </div>
</div>


