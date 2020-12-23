<template>
  <v-card flat>
    <v-container class="text-center" id="container">
      <v-row>
        <v-col class="font-weight-bold grey--text" cols="4" md="4">{{ title1 }}</v-col>
        <v-col class="font-weight-light" cols="4" md="4">{{ title2 }}</v-col>
        <v-col class="font-weight-light" cols="4" md="4">{{ title3 }}</v-col>
      </v-row>
      <v-row>
        <v-col :class="'display-1 font-weight-bold '+content1Color" cols="4" md="4">{{ content1 }}</v-col>
        <v-col :class="'display-1 '+content2Color" cols="4" md="4">{{ content2 }}</v-col>
        <v-col :class="'display-1  '+content3Color" cols="4" md="4">{{ content3 }}</v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props: {
    title1: String,
    title1Color:String,
    title2: String,
    title3: String,
    content1: String,
    content1Color:String,
    content2: String,
    content2Color:String,
    content3: String,
    content3Color:String,
  },
};
</script>

<style>
    #container {
        line-height: 9px;
    }
</style>