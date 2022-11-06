<template>
<h2>hello </h2>	
<h4>{{ page.title }}</h4>

</template>
<script setup>
import { useData } from 'vitepress'

const { page } = useData()
console.log(page.value.title);
</script>

