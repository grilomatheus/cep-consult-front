<template>
  <v-btn variant="outlined" color="primary" block :disabled="!isValid" @click="submit">Buscar</v-btn>
</template>

<script>
export default {
  props: {
    isValid: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['submit'],
  methods: {
    submit() {
      console.log('Emitting submit event');
      this.$emit('submit');
    }
  },
};
</script>
