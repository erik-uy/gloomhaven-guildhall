<template>
<v-container grid-list-xl text-xs-center>

  <v-toolbar app>
    <v-flex d-flex>
      <v-layout row>
        <v-btn @click.stop="drawer = !drawer"  color="error">Draw</v-btn>
       
    <Element type="earth"/>
    <Element type="fire"/>
    <Element type="air"/>
    <Element type="ice"/>
    <Element type="light"/>
    <Element type="dark"/>
        <v-btn @click.stop="drawer = !drawer"  color="success">End Turn</v-btn>    
      </v-layout>
    </v-flex>



        
  </v-toolbar>


  <v-container>
      <v-layout row wrap>
          <Monster  v-for="n in monsters" v-bind:key="n" :type="n"/>
      </v-layout>
  </v-container>



  <v-navigation-drawer dark temporary app  v-model="drawer">
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <!-- <v-list-tile v-for="item in items" :key="item.title">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile> -->
    </v-list>
  </v-navigation-drawer>


  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
</v-container>
</template>


<script>
import Monster from '@/components/Monster.vue'
import Element from '@/components/Element.vue'

  export default {
    data () {
      return {
        drawer: null,
        monsters: [
          'Vermling-Shaman',
          'Inox-Shaman',
          'Rending-Drake',
          'Ooze',
          'Living-Spirit',
        ]
      }
    },
    components: {
      Monster,
      Element
    }
  }
</script>