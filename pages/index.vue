<template>
  <div>
    <Main/>
    <Cases id="cases"/>
    <Services id="services"/>
    <About id="about"/>
    <WhyWe id="whywe"/>
    <Quote id=""/>
    <Questions id="feedback"/>
  </div>
</template>

<script>
import Main from "@/components/sections/home/Main";
import Cases from "@/components/sections/home/Cases";
import About from "~/components/sections/home/About";
import WhyWe from "~/components/sections/WhyWe";
import Services from "@/components/sections/home/Services";
import Quote from "~/components/sections/home/Quote";
import Questions from "~/components/sections/home/Questions";

export default {
  name: 'IndexPage',
  components: {Questions, Quote, Services, WhyWe, About, Main, Cases}
}
</script>
