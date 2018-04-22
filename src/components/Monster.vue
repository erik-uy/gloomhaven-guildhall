<template>
  <v-card :height="height+'px'" width="100%">
    <v-card-media :contain="true" height="100px">
      <i :class="image"></i>
    </v-card-media>
    <v-card-title primary-title>
      <v-layout>
        <v-flex>
          <h3 class="headline mb-0"><fit-text>{{type}}</fit-text></h3>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-actions>

      <table style="width:100%">
        <tr v-for="n in 5" v-bind:key="n">
          <td>
            <monster-instance/>
          </td>
          <td>
            <monster-instance/>
          </td>
        </tr>
      </table>
    </v-card-actions>
  </v-card>
</template>

<style>
  .card{
    margin-bottom:10px;
  }
  .swiper-pagination{
    bottom:-10px;
  }
</style>



<script>
import data from '@/assets/data.json'
import fitText from '@/components/FitText.vue';
import monsterInstance from '@/components/MonsterInstance.vue'


export default {
  name: 'Monster',
  props: ['type','height','scenarioLevel'],
  components: {
    fitText,
    monsterInstance
  },
  data:function(){
    return{
      levelModifier:0,
      image: 'monsters-'+this.type.replace(/\s/gi,'-'),
      stats:data.monsters[this.type].levels[this.scenarioLevel]
    };
  }
}
</script>
