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

        <v-speed-dial small direction="bottom" :transition= "'slide-y-reverse-transition'" v-model="fab">
          
          <v-btn flat small slot="activator" color="teal" dark fab hover v-model="fab">
            <v-icon large >settings</v-icon>
            <v-icon large >settings</v-icon>
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
          <v-layout>
            <swiper :options="swiperOption">
              <swiper-slide v-for="n in monsters" v-bind:key="n" :type="n">
                <Monster :type="n" :height="maxHeight" :scenarioLevel="1"/>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </v-layout>
        </v-container>
      </v-content>
    </div>
  </div>
</template>


<style>
  .toolbar-icon{
    height:41px;
    width:41px;
  }
  .card__title--primary{
    padding-top:0px
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
      var monsters= [
          'Vermling Shaman',
          'Inox Shaman',
          'Rending Drake',
          'Ooze',
          'Living Spirit',
        ];
        
      var monsterWidth=222;
      var panelsPerScreen=Math.floor(window.innerWidth/monsterWidth);
      panelsPerScreen = panelsPerScreen>monsters.length?monsters.length:panelsPerScreen;

      return {
        drawer: null,
        monsters: monsters,
        direction: 'bottom',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        top: false,
        right: true,
        bottom: true,
        left: false,
        transition: 'slide-y-transition',
        swiperOption: {
          // height:"100px",
//          autoHeight: true,
          mousewheel: true,
          slidesPerView:panelsPerScreen,
          loop: true,
          spaceBetween: 15,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      };
    },
    components: {
      Monster,
      Element,
      VueAwesomeSwiper,swiper,swiperSlide
    },
    computed:{
      maxHeight:function(){
        return window.innerHeight-48-40;
      },
      panelCount:function(){
        var panelsPerScreen=Math.floor(window.innerWidth/this.monsterWidth);
        return panelsPerScreen>this.monsters.length?this.monsters.length:panelsPerScreen
      }
    }
  }
</script>