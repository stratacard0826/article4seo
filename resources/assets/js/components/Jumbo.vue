<template>
  <v-jumbotron color="grey lighten-2">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3"><slot name="header"></slot></h3>
          <slot name="subheading"></slot>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Check out our newest features!</div>
          <v-btn large color="primary" class="mx-0">See more</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>
