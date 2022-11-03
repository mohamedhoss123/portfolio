<script setup>
import { onMounted , ref } from "vue";
import MySignature from "./components/signature/MySignature.vue";
import Sections from "./components/Sections.vue"
const isSignatureRunning = ref(true)
onMounted(()=>{
  setTimeout(()=>{
    isSignatureRunning.value = false
  },3500)
})
</script>

<template>
  <MySignature v-if="isSignatureRunning"/>
  <Sections v-if="!isSignatureRunning"/>
</template>

<style>

</style>