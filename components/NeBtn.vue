<template>
  <button v-bind="$attrs" class="ne-btn" @click="$emit('click')" :class="variant">
    <slot>

    </slot>
  </button>
</template>

<script>
export default {
  name: "NeBtn",
  props: {
    variant: {type: String}
  }
}
</script>

<style scoped lang="scss">
.ne-btn:disabled {
  opacity: 0.7;
  filter: grayscale(1);
}

.ne-btn {
  font-size: 24px;
  padding: 16px 56px;
  border-radius: 100px;
  background: var(--blue-gradient);
  border: none;
  color: white;
  line-height: 1;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  transition: all .3s ease;

  &:not(:disabled):hover {
    box-shadow: 0 0 10px 4px rgba(112, 146, 224, 0.45);
  }
}

.ne-btn.light {
  color: var(--text-color);
  background: white;

  &:not(:disabled):hover {
    box-shadow: 0 0 10px 4px rgba(255, 255, 225, 0.45);
  }
}

@media screen and (max-width: 998px) {
  .ne-btn {
    font-size: 22px;
    padding: 14px 32px;
  }
}

@media screen and (max-width: 998px) {
  .ne-btn {
    font-size: 20px;
    padding: 14px 32px;
  }
}

@media screen and (max-width: 768px) {
  .ne-btn {
    font-size: 18px;
    padding: 14px 36px;
  }
}
</style>
