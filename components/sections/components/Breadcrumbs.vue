<template>
  <div class="breadcrumbs d-flex align-items-center mb-3 mb-lg-5">
    <img src="@/assets/images/breadcrumbs_arrow.svg" class="mr-2" alt="">
    <slot></slot>
    <img v-if="second" src="@/assets/images/breadcrumbs_arrow.svg" class="mx-2" alt="">
    <slot name="second"></slot>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    second: Boolean
  }
}
</script>

<style scoped lang="scss">
.breadcrumbs {
  font-size: 16px;
  @media screen and (max-width: 998px) {
    font-size: 14px;
  }
}
</style>
