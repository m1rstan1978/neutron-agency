<template>
 <NuxtLink :to="to" class="ne-coupon">
   <div class="test" :style="`background-image: url('${background}')`">
     <div class="block-height">
       <div>
         <h5>{{name}}</h5>
         <p>{{description}}</p>
       </div>
       <div class="mt-auto d-flex flex-wrap transfer">
         <div class="dog-pill" v-for="dog in categories" :key="dog">
           <a href="#">{{dog}}</a>
         </div>
       </div>
       <div v-if="other_img">
         <div>
           <span class="other">
             {{other_description}}
             <img :src="other_img" alt="">
           </span>
         </div>
       </div>
     </div>
   </div>
 </NuxtLink>
</template>

<script>
export default {
  name: "NeCoupon",
  props: {
    background: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    categories: {type: Array, default: () => ([])},
    other_description: {type: String},
    other_img: {type: String},
    to: {type: String, default: "/portfolio"}
  }
}
</script>

<style scoped>
.test {
  height: 376px;
  padding: 40px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.block-height {
  height: 296px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.test h5 {
  font-size: 32px;
  color: #FFFFFF;
  font-weight: 600;
}

.test p {
  font-size: 24px;
  color: #FFFFFF;
  padding-right: 80px;
  margin: 0;
}

.test {
  filter: grayscale(100%);
  transition: all .25s ease!important;
}

.test:hover {
  filter: grayscale(0%);
}

.dog-pill {
  color: #000;
  font-size: 20px;
  padding: 8px 30px;
  border-radius: 50px;
  background: rgba(250, 249, 249, 0.7);
  transition: all 0.2s ease;
  white-space: nowrap;
  border: none;
  display: inline-block;
  margin-top: 10px;
}


.dog-pill {
  margin-right: 12px;
}

.dog-pill:last-of-type {
  margin-right: 0;
}

.dog-pill:hover {
  background: var(--white);
}

a,
a:visited,
a:hover,
a:focus,
a:active {
  color: inherit;
  text-decoration: none;
}

.other {
  color: #FFFFFF;
  font-weight: 700;
  font-size: 30px;
  transition: all 0.3s ease;
}

.other:hover {
  padding-left: 24px;
}

@media (max-width: 1400px) {
  .test p {
    font-size: 20px;
  }

  .other {
    font-size: 24px;
  }
}

@media (max-width: 1200px) {
  .test h5 {
    font-size: 28px;
  }

  .other {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .dog-pill {
    font-size: 16px;
    padding: 6px 20px;
  }
}

@media (max-width: 767px) {
  .test {
    height: 300px;
    padding: 40px;
  }

  .block-height {
    height: 255px;
  }

.dog-pill {
    font-size: 18px;
    padding: 6px 20px;
  }

  .test {
    padding: 20px 20px 20px 30px;
  }
}

@media (max-width: 450px) {
  .test {
    filter: grayscale(0%);
  }

  .test h5 {
    font-size: 26px;
  }


  .other {
    font-size: 20px;
  }
}



</style>
