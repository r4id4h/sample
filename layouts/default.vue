<template>
  <v-app>
    <navbar></navbar>
    <navigation-drawer></navigation-drawer>
    <v-main style="background-color:#4AD295;">
      <p>Main Area</p>
<!--      Comment to remove content from pages/index.vue-->
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>