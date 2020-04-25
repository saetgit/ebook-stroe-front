<template>
  <li class="col-md-4 col-sm-4 col-xs-4">
    <article class="entry-item">
      <a href="#" class="ct-icon-5">
        <i :class="service.icon"></i>
      </a>
      <div class="entry-content">
        <h4 class="entry-title">
          <a href="#">{{service.title}}</a>
        </h4>
        <p>{{service.description}}</p>
      </div>
    </article>
  </li>
</template>

<script>
export default {
  name: "service-component",

  props: {
    service: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style>
</style>