<template>
  <div>
    <div>
      <v-toolbar app dense>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" >
            <img src="@/assets/card-draw.svg" class="toolbar-icon">
        </v-toolbar-side-icon>
        <v-toolbar-title></v-toolbar-title>
        <v-spacer></v-spacer>
        
        <Element type="earth"/>
        <Element type="fire"/>
        <Element type="air"/>
        <Element type="ice"/>
        <Element type="light"/>
        <Element type="dark"/>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-speed-dial small direction="bottom" :transition= "'slide-y-reverse-transition'" >
          <v-btn flat small slot="activator" color="teal" dark fab hover v-model="fab">
            <v-icon large >settings</v-icon>
            <v-icon large >close</v-icon>
          </v-btn>

          <v-btn fab dark color="brown" >
            <img src="@/assets/battle-back.png" class="toolbar-icon">
          </v-btn>

          <v-btn fab dark color="red darken-2" >
            <img src="@/assets/monster-back.png" class="toolbar-icon">
          </v-btn>
          
          <v-btn fab dark color="green lighten-2" >
            <v-icon large>help_outline</v-icon>
          </v-btn>

          <v-btn fab dark color="purple">
            <img src="@/assets/scenario-success.svg" class="toolbar-icon">
          </v-btn>
          <v-btn fab dark  color="yellow" border>
            <img src="@/assets/scenario-failed.svg" class="toolbar-icon">
          </v-btn>
          
        </v-speed-dial>

        <v-spacer></v-spacer>
        <v-btn @click.stop="drawer = !drawer" flat  fab small color="red">
          <img src="@/assets/cycle.svg" class="toolbar-icon">
        </v-btn>
      </v-toolbar>


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
          <v-layout row wrap>
            <swiper :options="swiperOption">
              <swiper-slide v-for="n in monsters" v-bind:key="n" :type="n">
                <Monster :type="n"/>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </v-layout>
        </v-container>

        <!-- <v-container fluid> -->
          <!-- <v-layout row wrap> -->
            <!-- <v-flex v-for="n in monsters" v-bind:key="n" :type="n"> -->
              <!-- <Monster :type="n"/> -->
            <!-- </v-flex> -->
          <!-- </v-layout> -->
          <!-- <v-layout row wrap> -->
            <!-- <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            
              <swiper-slide>I'm Slide 1</swiper-slide>
              <swiper-slide>I'm Slide 2</swiper-slide>
              <swiper-slide>I'm Slide 3</swiper-slide>
              <swiper-slide>I'm Slide 4</swiper-slide>
              <swiper-slide>I'm Slide 5</swiper-slide>
              <swiper-slide>I'm Slide 6</swiper-slide>
              <swiper-slide>I'm Slide 7</swiper-slide>
            
              <div class="swiper-pagination"  slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
              <div class="swiper-scrollbar"   slot="scrollbar"></div>
            </swiper> -->
          <!-- </v-layout> -->
        <!-- </v-container> -->
      </v-content>
    </div>
  </div>
</template>


<style>
  .toolbar-icon{
    height:40px;
    width:40px;
  }
</style>



<script>
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'


import Monster from '@/components/Monster.vue'
import Element from '@/components/Element.vue'
import 'swiper/dist/css/swiper.css'

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
        ],

        direction: 'bottom',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        top: false,
        right: true,
        bottom: true,
        left: false,
        transition: 'slide-y-reverse-transition',
        swiperOption: {
                  slidesPerView: 4,
                  spaceBetween: 3,
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                  }
        }
      };
    },
    components: {
      Monster,
      Element,
      VueAwesomeSwiper,swiper,swiperSlide
    }
  }
</script>