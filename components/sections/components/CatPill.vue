<template>
  <div class="cat-pill" @click="$emit('click')" :class="selected && 'selected'">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CatPill",
  props: {
    selected: {type: Boolean}
  }
}
</script>

<style scoped>
.cat-pill {
  background: white;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 100px;
  padding: 4px 16px;
  box-shadow: none;
  transition: all .1s ease-in-out, color .3s ease-in-out, background-color .3s ease-in-out;
  cursor: pointer;

}

@media screen and (max-width: 768px) {
  .cat-pill {
    font-size: 16px;
  }
}

.cat-pill:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);
}

.cat-pill.selected {
  color: white;
  background: var(--blue-accent);
}
</style>
