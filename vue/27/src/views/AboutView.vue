<template>
  <div class="about">
    <h1>{{ mesg.toUpperCase() }}</h1>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const mesg = ref("This is an about page");
</script>
