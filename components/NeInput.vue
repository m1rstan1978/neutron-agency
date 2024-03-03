<template>
  <div>
    <div class="position-relative ne-input-border text-left" :class="inFocus ? 'focused' : ''" @click="$refs.input.focus()"
         :style="'background: ' + backgroundColor + '; color: ' + color">
      <div class="placeholder focused" v-if="topPlaceholder"
           :style="('color: ' + color + ';' + ' background: ' + backgroundColor)"
      >
        {{ topPlaceholder }}
      </div>
      <div class="placeholder"
           :class="(!topPlaceholder && focused) ? 'focused' : (topPlaceholder && focused) ? 'hidden' : ''"
           :style="('color: ' + color) + ';' + (focused ? (' background: ' + backgroundColor) : '')"
      >
        {{ placeholder }}
      </div>
      <input @focus="focused = true; inFocus = true" @blur="onBlur" @input="onInput" :value="inputContent" v-bind="$attrs" :type="type"
             class="ne-input-form w-100" ref="input" :style="'color: ' + color + '; background: ' + backgroundColor"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "NeInput",
  props: {
    backgroundColor: {type: String, default: "#FFF"},
    placeholder: {type: String},
    color: {type: String, default: "var(--text-color)"},
    value: {default: ''},
    topPlaceholder: {type: String, default: null},
    type: {type: String, default: "text"},
    max: Number || String
  },
  data() {
    return {
      inputContent: null,
      focused: false,
      inFocus: false
    }
  },
  watch: {
    value(v) {
      this.inputContent = v
      this.focused = !!this.inputContent
    }
  },
  methods: {
    onBlur() {
      if (!this.inputContent) {
        this.focused = false
      }
      this.inFocus = false
    },
    onInput(e) {
      if (this.type === "number" && !isNaN(parseInt(e.data)) && e.data !== null) {
        return
      }

      if (e.currentTarget.value.length > this.max && e.data !== null) {
        this.$refs.input.value = this.inputContent
        return;
      }

      if (this.type === "tel") {
        if (!"1234567890-+".includes(e.data) && e.data !== null) {
          console.log("Not a phone number: ", e.data)
          this.$refs.input.value = this.inputContent
          return
        }

        if (this.value === "" && e.data === "8") {
          this.inputContent = "+7"
          this.$emit("input", this.inputContent)
          return
        }

        if (this.value.length > 14 && e.data !== null) {
          this.$refs.input.value = this.inputContent
          return;
        }
      }

      this.inputContent = e.currentTarget.value
      this.$emit("input", this.inputContent)
    }
  },
  mounted() {
    if (this.value) {
      this.inputContent = this.value
      this.focused = true
    }
  }
}
</script>

<style scoped lang="scss">
.ne-input-form {
  border: none;
  outline: none;
  font-size: 18px;
  color: var(--text-color)
}

.ne-input-border {
  border: 1px solid var(--text-color);
  border-radius: 5px;
  padding: 6px;
  cursor: text;
  text-overflow: ellipsis;
}

.ne-input-border.focused {
  border-color: var(--blue-accent);

  .placeholder {
    color: var(--blue-accent)!important;
  }
}

.placeholder {
  position: absolute;
  opacity: .4;
  transition: all .15s ease-in-out;
  top: 8px;
  left: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    top: 8px;
  }
}

.placeholder.focused {
  opacity: 1;
  font-size: 14px;
  top: -12px;
  left: 12px;
  //@media  screen and (max-width: 988px){
  //  top: -10px;
  //  font-size: 12px;
  //}
}

.placeholder.hidden {
  opacity: 0
}
</style>
