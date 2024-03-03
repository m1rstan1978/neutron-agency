<template>
  <div>
    <ne-input :color="color" :max="40" :background-color="backgroundColor" v-model="name" class="mt-3" placeholder="Введите имя" top-placeholder="Ваше имя*"/>
    <b-row class="mt-3">
      <div class="col-12 col-md-6">
        <ne-input type="email" :max="30" :color="color" :background-color="backgroundColor" v-model="email" class="w-100" placeholder="Введите почту" top-placeholder="E-mail"/>
      </div>
      <div class="col-12 col-md-6">
        <ne-input type="tel" :color="color" :background-color="backgroundColor" v-model="phone" class="mt-3 mt-md-0 w-100" placeholder="+7" top-placeholder="Номер телефона"/>
      </div>
    </b-row>

    <div class="text-center mt-4 mt-lg-5">
      <ne-btn :variant="variant" :disabled="!(name && (phone || (email && email.includes('@'))))" class="mx-auto" @click="onSubmit">Свяжитесь со мной!</ne-btn>
      <p>Нажимая на “Свяжитесь со мной!”, я даю согласие на <a class="privacy-link" @click="$bvModal.show('modal-privers')">обработку персональных данных</a></p>
    </div>
  </div>
</template>

<script>
import {BACKEND_API} from "@/backend.config";

export default {
  name: "NeFeedbackForm",
  props: {
    variant: {type: String, default: "dark"},
    color: {type: String, default: "var(--text-color)"},
    backgroundColor: {type: String, default: "#FFF"},
  },
  data() {
    return {
      name: "",
      email: "",
      phone: ""
    }
  },
  methods: {
    onSubmit() {
      this.$axios.$post(BACKEND_API + "/requests/create", {
        name: this.name,
        email: this.email,
        phone: this.phone
      })

      this.$emit("submit", {name: this.name, phone: this.phone, email: this.email})
    }
  }
}
</script>

<style scoped>
p {
  padding-top: 10px;
  font-size: 16px;
}

a.light {
  color: #fff;
}

.privacy-link {
  color: #7092E0!important;
}
</style>
