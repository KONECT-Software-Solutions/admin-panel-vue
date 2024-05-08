<template>
    <div class="modal" v-if="isOpen">
      <div class="modal-content">
        <!-- Modal content here -->
        <slot></slot>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      openModal() {
        this.isOpen = true;
      },
      closeModal() {
        this.isOpen = false;
      }
    }
  };
  </script>
  
  <style>
  /* CSS styles for modal */
  </style>
  