<template>
<div>
    <v-btn small fab v-on:click="trigger" flat>
        <span class="element-container" :style="strengthBackground">
        <i :class="'psd-element-'+type" style="zoom:40%"></i>
        </span>
    </v-btn>
</div>
</template>

<style>
    .element-container {
        padding:0px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: inherit;
        color: inherit;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: inherit;
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin: 0 auto;
        -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
        transition: .3s cubic-bezier(.25,.8,.5,1);
        white-space: nowrap;
        width: inherit;
    }
</style>

<script>
export default {
  name: 'Element',
  data: function () {
    return {
        strength:2,
        availableTypes:{
            air:{
                color:'#4C6763'
            },
            fire:{
                color:'#e2421f'
            },
            ice:{
                color:'#56c8ef'
            },
            earth:{
                color:'#7aa626'
            },
            light:{
                color:'#eca610'
            },
            dark:{
                color:'#261132'
            }
        }
    }
  },
  computed:{
      strengthBackground:function(){
          var r={};
          switch (2-this.strength){
              case 0: r='background:'+'darkgray';
                break;
              case 1: r= 'background:'+'linear-gradient( to right,'+this.elementColor +' 0%, '+this.elementColor+' 40%, darkgray 41%,darkgray 100%); border:3px '+this.elementColor+' solid'                
                break;
              case 2: r= 'background:'+this.elementColor+'; border:3px '+this.elementColor+' solid';
                break;
          };
          return r;
      },
      elementColor:function(){
          return this.color||this.availableTypes[this.type].color;
      }
  },
  methods :{
      trigger:function(event){
          this.strength=++this.strength%3;
      }
  },
  props: {
      'type':{type:String, default:'air'},
    //   'strength':{type:Number, default:0},
      'color':{type:String, default:null}
  }
}
</script>


