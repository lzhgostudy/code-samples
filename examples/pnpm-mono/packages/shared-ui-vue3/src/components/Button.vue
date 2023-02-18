<script setup lang="ts" name="Button">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
<button style="background-color: purple" @click="count++">
  You clicked me {{ count }} times.
</button>
</template>