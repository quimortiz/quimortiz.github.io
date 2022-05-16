---
layout: page
title: CV
permalink: /CV/
---



<style>


.contact { 
font-size:.875rem;
}

.myDiv {
  border: 5px outset red;
  background-color: lightblue;
  text-align: center;
}
.myDiv p {
color: green;
}
.myDiv .myDiv2 {
color: red;
}


.cvtitle  {
  display: flex;
  flex-direction: row;
}

.cvtitle :before, :after{
  content: "";
  flex: 1 1;
  border-bottom: 1px solid;
  margin: auto;
}

.cvtitle :before {
  margin-right: 10px
}

.cvtitle :after {
  margin-left: 10px
}

.cvsection .education-item {
padding-bottom: 1em;
font-size: .875em;
}

.cvsection .education-item .degree {
font-weight: bold;
font-size: .875rem;
}


.experience .experience-item {

font-size: .875rem;

}

.experience .experience-item .role {

font-weight: bold;

}

.experience .experience-item .company {
color: #689d6a
}


.experiance .experience-item .time {
color: #427b58;
font-style: italic;
}

.skills .title {
font-weight: bold;
}


.publication-items {
  font-size: .875em;
}
.publication-item {
padding-bottom: 1em;

}

.publication-items .publication-item  .publication-title {
  font-weight:bold;
}


.languages {
font-size: .875em;
}


.skills {
font-size: .875em;
}


</style>

Last updated: May 2022

Download PDF with complete CV <a href="/assets/cv may 2022 docs.pdf">here</a> 


## Contact
{% assign contact = site.data.data.contact %}
{% if contact %}
<section class="contact">
    {% if contact.email %}
        <div class="contact-item">
            <i data-feather="mail"></i>
            <a href="#">
                {{contact.email}}
            </a>
        </div>
    {% endif %}

    {% if contact.phone %}
        <div class="contact-item">
            <i data-feather="phone"></i>
            <a href="#">
                {{contact.phone}}
            </a>
        </div>
    {% endif %}

    {% if contact.github %}
        <div class="contact-item">
            <i data-feather="github"></i>
            <a href="https://github.com/{{contact.github}}">
                {{contact.github}}
            </a>
        </div>
    {% endif %}

    {% if contact.linkedin %}
        <div class="contact-item">
            <i data-feather="linkedin"></i>
            <a href="https://linkedin.com/in/{{contact.linkedin}}">
                {{contact.linkedin}}
            </a>
        </div>
    {% endif %}

    {% if contact.twitter %}
        <div class="contact-item">
            <i data-feather="twitter"></i>
            <a href="https://twitter.com/{{contact.twitter}}">
                {{contact.twitter}}
            </a>
        </div>
    {% endif %}

    {% if contact.gitlab %}
        <div class="contact-item">
            <i data-feather="gitlab"></i>
            <a href="https://gitlab.com/{{contact.gitlab}}">
                {{contact.gitlab}}
            </a>
        </div>
    {% endif %}
</section>
{% endif %}


{% assign education = site.data.data.education %}
{% if education %}
<h2 class="cvtitle">Education</h2>
<section class="cvsection">
    {% for ed in education %}
        <div class="education-item">
            <div class="degree">{{ed.degree}}</div>
            <div class="university">{{ed.university}}</div> 
            <div class="time">{{ed.time}}</div>
        </div>
    {% endfor %}
</section>
{% endif %}


{% assign experience = site.data.data.experience %}
{% if experience %}
<h2 class="cvtitle">Experience</h2>
<section class="experience">
    {% for exp in experience %}
        <div class="experience-item">
            <div class="role">
                {{exp.role}}
            </div>
            <div class="company">
                {{exp.company}}. 
                <span class="time">{{exp.time}}.</span>
            </div> 
            <div class="details">{{exp.details}}</div>
            <!-- <p class="technologies">Technologies Used: {{exp.technologies_used}}</p> -->
            <p> </p>
        </div>
       
    {% endfor %}
</section>
{% endif %}



{% assign languages = site.data.data.languages %}
{% if languages %}
<h2 class="cvtitle"> Languages </h2>
<section class="languages">
    {% for lang in languages %}
        <div class="idiom">{{lang.idiom}}</div>
    {% endfor %}
</section>
{% endif %}


{% assign skills = site.data.data.skills %}
{% if skills %}
<h2 class="cvtitle"> Skills </h2>
<section class="skills">
    {% for sks in skills %}
        <div class="title">{{sks.category}}</div>
        {% for sk in sks.skill%}
            <div class="skill">{{sk}}</div>
        {% endfor %}
    {% endfor %}
</section>
{% endif %}



{% assign publications = site.data.data.publications %}
{% if publications %}
<h2 class="cvtitle">Selected Publications</h2>
<section class="publications">
    <p>
    <a href="{{ site.baseurl }}{% link research.md %}">Full list</a> of publications. 
    <a href="https://scholar.google.com/citations?user=ODdBJAcAAAAJ&hl=ca&oi=ao"> Google scholar profile </a>
    </p>
    <div class="publication-items">
        {% for pub in publications%}
            <div class="publication-item">
                <div class="publication-title">
                    <a href="{{pub.link}}">{{pub.title}}</a>
                </div>
                <div class="authors">{{pub.authors}}</div>
                <div class="conference">{{pub.conference}}</div>   
            </div>
        {%endfor%}
    </div>
</section>
{% endif %}


