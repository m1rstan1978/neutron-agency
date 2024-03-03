<template>
  <div>
    <b-row class="ne-collapse__wrapper pointer" @click="toggleCollapse">
      <b-col cols="2" class="d-flex ne-collapse" :class="opened && 'opened'">
        <button class="mb-auto">
          <img src="@/assets/images/icons/plus.svg" alt="plus">
        </button>
      </b-col>
      <b-col cols="10" class="pl-0 d-flex align-items-center">
        <h6 class="question">
          <slot name="question"></slot>
        </h6>
      </b-col>
    </b-row>
    <b-row :class="opened && 'mt-1 mt-md-2 mt-lg-3'" style="transition: all .3s ease-in-out">
      <b-col cols="10" offset="2" class="pl-0">
        <div class="answer" ref="answer" :style="opened ? 'height: ' + answerHeight + 'px' : ''">
          <slot></slot>
        </div>
      </b-col>
    </b-row>
    <hr class="mb-0 mt-2 mt-lg-2" v-if="divider" :class="opened && 'mt-3'">
  </div>
</template>

<script>
export default {
  name: "NeCollapse",
  props: {
    divider: {type: Boolean, default: true}
  },
  data() {
    return {
      opened: true,
      answerHeight: null
    }
  },
  mounted() {
    this.answerHeight = this.$refs.answer.offsetHeight
    this.opened = false
    this.$refs.answer.classList.add("animated")
    this.$refs.answer.classList.add("closed")
  },
  methods: {
    toggleCollapse () {
      this.opened = !this.opened

      if (!this.opened) {
        this.$refs.answer.style.height = this.answerHeight + "px"
      } else {
        this.$refs.answer.style.height = "0px"
      }
    }
  }
}
</script>

<style lang="scss">
.answer.animated {
  transition: all .3s ease;
}


.answer {
  overflow: hidden;
  font-weight: 500;
  font-size: 20px;
}

.answer.closed {
  height: 0;
}


.ne-collapse {
  button {
    border: none;
    outline: none;
    background: var(--blue-gradient);
    color: white;
    border-radius: 100px;
    padding: 10px;
    aspect-ratio: 1;
    min-width: 35px;
    min-height: 35px;
    display: flex;
    align-content: center;
    justify-content: center;

    img {
      width: 100%;
      transition: all .3s ease;
    }
  }
}

.ne-collapse.opened {
  button {
    img {
      transform: rotate(45deg);
    }
  }
}

.question {
  font-weight: 500;
  font-size: 26px;
}

@media screen and (max-width: 1200px) {
  .question {
    font-size: 22px;
  }

  .answer {
    font-size: 18px;
  }
}

@media screen and (max-width: 768px) {
  .question {
    font-size: 20px;
  }

  .answer {
    font-size: 16px;
  }
}
</style>
