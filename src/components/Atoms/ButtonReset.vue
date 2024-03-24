<!-- src\components\Atoms\ButtonReset.vue -->
<template>
	<v-btn @click="$emit('reset')">Limpar Todos</v-btn>
  </template>
  
  <script>
  export default {
	emits: ['reset']
  };
  </script>