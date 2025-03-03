---
layout: default
title: Projects
---
<link rel="stylesheet" type="text/css" href="projects.css" />

<h1>Projects</h1>

You can find out details about in-progress projects using the KAP Legend System
here, with details about colour scheme, modifier types and sublegends etc.

If you are interested in designing your own set of keycaps using KAP Legend
System, we recommend consulting this list to ensure it doesn’t overlap too
closely with an existing set. This can increase the chances of both sets
successfully reaching Minimum Order Quantity.

If you have a set in production and you’d like to add it to the list, please get
in touch via the [Keyreative Discord channel][keyreative-kap-2shot-channel].
Note that these images are illustrative and not intended to necessarily
represent the kitting or precise colours of the final shipping product.

<div id="project-details">
{% for project in site.data.projects %}
  <section class="project">
    <h2 id="{{ project.id }}">
      {{ project.name }}
      <div class="project-color main" style="background-color:{{ project.colors.main}};">
        {% for legend_color in project.colors.legends %}
          <div class="legend-color" style="background-color:{{ legend_color }}"></div>
        {% endfor %}
      </div>
    </h2>

    {% if project.preview %}
      <img src="{{ project.preview }}" width="800" alt="Image preview of {{ project.name }}">
    {% endif %}

    <dl class="project-meta">
      <dt>Designer</dt>
      <dd>{{ project.designer }}</dd>
      {% if project.interest_check %}
        <dt>Interest Check</dt>
        <dd><a href="{{ project.interest_check }}" target="_blank">Details</a></dd>
      {% endif %}
      <dt>Modifiers</dt>
      <dd>{{ project.modifiers }}</dd>
      <dt>Sublegends</dt>
      <dd>{{ project.sublegends }}</dd>
      <dt>Status</dt>
      <dd>{{ project.status }}</dd>
      {% if project.shipping %}
        <dt>Shipping</dt>
        <dd>{{ project.shipping }}</dd>
      {% endif %}
      {% if project.vendors %}
        <dt>Vendors</dt>
        {% for vendor in project.vendors %}
          <dd>{{ vendor.region }}: <a href="{{ vendor.url }}" target="_blank">{{ vendor.name }}</a></dd>
        {% endfor %}
      {% endif %}
    </dl>
  </section>
{% endfor %}
</div>

[keyreative-kap-2shot-channel]: https://discord.gg/Gs7fnW2ekQ
