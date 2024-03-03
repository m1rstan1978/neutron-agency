<template>
  <div class="neutron-link__wrapper" :class="variant" @mouseenter="onHover" @mouseleave="onLeave">
    <slot v-if="onlyUnderline" name="content"/>
    <NuxtLink :to="to" class="neutron-link" v-else-if="nuxt" :class="(active ? 'active' : '') + ' variant'">
      <slot/>
    </NuxtLink>
    <a v-bind="$attrs" class="pointer neutron-link" :class="variant" v-else>
      <slot/>
    </a>
    <div class="underline" :class="hovered ? 'hovered' : ''"></div>
  </div>
</template>

<script>
export default {
  name: "NeLink",
  props: {
    to: {type: String},
    nuxt: {type: Boolean, default: true},
    active: {type: Boolean, default: false},
    onlyUnderline: {type: Boolean, default: false},
    variant: {type: String, default: ""}
  },
  data() {
    return {
      hovered: false
    }
  },
  methods: {
    onHover() {
      this.hovered = true
    },
    onLeave() {
      this.hovered = false
    }
  }
}
</script>

<style scoped lang="scss">
.neutron-link__wrapper {
  position: relative;
}

.neutron-link {
  transition: all .3s ease;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
}

.neutron-link.active {
  color: var(--blue-accent);
}

.dark {
  .neutron-link {
    color: white
  }
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  border-bottom: 2px var(--blue-accent) solid;
  transition: all .3s ease;
}

.underline.hovered {
  width: 100%;
}
</style>
