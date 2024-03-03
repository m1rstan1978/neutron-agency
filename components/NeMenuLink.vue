<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <NuxtLink :to="to" class="neutron-link" active-class="active-link">
        <slot/>
      </NuxtLink>
      <i class="plus material-icons-round d-none d-lg-block" :style="showChapters && 'opacity: 1'"
         v-if="chapters.length" @mouseenter="onChaptersOpen">add</i>
    </div>
    <hr class="my-md-2 my-1">
  </div>
</template>

<script>
export default {
  name: "NeMenuLink",
  props: {
    to: {type: String},
    chapters: {type: Array, default: () => ([])},
    showChapters: false,
  },
  data() {
    return {
      chaptersHeight: 0
    }
  },
  watch: {},
  methods: {
    onChaptersOpen() {
      this.$emit('open-chapters')
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
@import '/assets/style/text';

.neutron-link {
  font-size: 48px;
  font-weight: 800;
  transition: all .3s ease;
  line-height: 1.2;

  &:hover {
    text-decoration: none;
    color: var(--blue-accent);
  }
}

.active-link {
  @extend .dark-gradient-text;
  font-size: 56px;
}

@media screen and (max-width: 768px) {
  .neutron-link {
    font-size: 32px;
  }

  .active-link {
    font-size: 36px;
  }
}

.plus {
  @extend .gradient-text;
  font-size: 48px;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity .3s ease;

  &:hover {
    opacity: 1;
  }
}
</style>
