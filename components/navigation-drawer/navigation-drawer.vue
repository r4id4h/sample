<template>
  <v-navigation-drawer
      color="red"
      @input="$emit('input', $event)"
      app
      :permanent="true"
      :floating="true"
  >
    <p>NavigationDrawer</p>
  </v-navigation-drawer>
</template>