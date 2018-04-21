<template>
  <v-card width="215px" :height="height+'px'">
    <v-card-media :contain="true" height="100px">
      <i :class="image"></i>
    </v-card-media>
    <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0"><fit-text>{{type}}</fit-text></h3>
          <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
        </div>
    </v-card-title>
    <v-card-actions>
      <v-container>
        <v-layout v-for="j in 5" :key="`6${j}`">
          <v-flex xs6 v-for="i in 2" :key="`6${i}`">
                    <v-btn flat color="orange">Share</v-btn>
          </v-flex>
        </v-layout>
      </v-container>

    </v-card-actions>
  </v-card>
</template>

<script>
import data from '@/assets/data.json'
import fitText from '@/components/FitText.vue';


export default {
  name: 'Monster',
  props: ['type','height'],
  components: {
    fitText
  },
  data:function(){
    return{
      image: 'monsters-'+this.type.replace(/\s/gi,'-')
    };
  }
}
</script>
