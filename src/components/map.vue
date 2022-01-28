<template>
<link href='https://css.gg/pin.css' rel='stylesheet'>
    <div class="all">
        
        <i  class="gg-pin" :class="current" ></i>
        <div class="imgcnt">
        <img src="./assets/map.png">
        </div>
    <div class="sidebar" :class="{dark:darkMode}">

        <div class="button-container">
        <button @click="this.setpos('oran')"> وهران</button>
        <button @click="this.setpos('jir')"> بير الجير</button>
        <button @click="this.setpos('okba')"> حاسي بن عقبة</button>
        <button @click="this.setpos('kadil')"> قديل </button>
        <button @click="this.setpos('youkba')">سيدي بن عقبة</button>
        <button @click="this.setpos('arzew')"> أرزيو </button>
        <button @click="this.setpos('baya')"> عين البية </button>
        <button @click="this.setpos('maf')"> حاسي مفسوخ </button>
        <button @click="this.setpos('fray')">بن فريحة  </button>
        <button @click="this.setpos('bounif')"> حاسي بونيف </button>
        <button @click="this.setpos('chaami')"> سيدي الشحمي </button>
        <button @click="this.setpos('sania')"> السانية </button>
        <button @click="this.setpos('msr')"> مسرغين  </button>
        <button @click="this.setpos('btls')"> بوتليلس  </button>
        <button @click="this.setpos('krm')"> عين الكرمة </button>
        <button @click="this.setpos('onsr')"> العنصر  </button>
        <button @click="this.setpos('bsfr')"> بوسفر  </button>
        <button @click="this.setpos('trk')"> عين الترك  </button>
        <button @click="this.setpos('kbr')"> مرسى الكبير  </button>
        <button @click="this.setpos('km')"> الكرمة  </button>
        <button @click="this.setpos('tf')"> طفراوي  </button>
        <button @click="this.setpos('tlilat')"> واد تليلات  </button>
        <button @click="this.setpos('braya')"> البرية  </button>
        <button @click="this.setpos('bfts')"> بوفاطيس  </button>
        <button @click="this.setpos('twya')"> بطوية  </button>
        <button @click="this.setpos('jaj')"> مرسى الحجاج  </button>
        </div>
    </div>
  
    </div>
</template>
<style scoped>
img{
    width: 700px;
    height: 600px;
}


.all{
    
    
    display: flex;

    height: 100vh;
}
.sidebar{
 width: 200px;
    height: 79vh;
    right: 0;
    background-color: white;
    color: rgba(18, 14, 41, 0.938);
    overflow-y: scroll;
    position: absolute;
    margin-top: 35px;
    border: 1px solid gray;
    border-radius: 20px;
    transition: 0.4s;
    
}
.dark{
        background-color: rgba(18, 14, 41, 0.938);
    color: white;
}
.gg-pin {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: rotate(45deg) scale(var(--ggs,1));
    width: 18px;
    height: 18px;
    border-radius: 100% 100% 0 100%;
    border: 2px solid;
    margin-top: -4px;
    z-index: 999;
    transition: 1s ease-in-out;

}
/*
.gg-pin::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid;
    top: 3px;
    left: 3px;
    border-radius: 40px;
}*/
.oran{
    left: 315px ;
    top: 225px;
}

.okba{
    left:426px;
    top:190px;

}
.jir{
    left: 384px;
    top: 203px;
}
.kadil{

 left: 462px;
 top: 169px;
}
.youkba{
    left: 483px;
    top: 122px;

}
.arzew{
        left: 531px;
    top: 122px;
}
.baya{
        left: 531px;
    top: 164px;
}
.maf{
    left: 502px;
    top: 164px;
}
.fray{
    left: 502px;
    top: 226px;
}
.bounif{
    left: 413px;
    top: 242px;
}
.chaami{
    left: 372px;
    top: 246px;
}
.sania{
    left: 319px;
    top: 272px;
}
.msr{
    left: 259px;
    top: 272px;
}
.btls{
    left: 166px;
    top: 272px;
}
.krm{
        left: 104px;
    top: 236px;

}
.onsr{
    left: 154px;
    top: 213px;
}
.bsfr{
    left: 213px;
    top: 192px;

}
.trk{
    
    left: 241px;
    top: 175px;


}
.kbr{
    left: 280px;
    top: 191px;
}
.km{
    left: 358px;
    top: 298px;
}
.tf{
    left: 358px;
    top: 392px;
}
.tlilat{    left: 445px;
    top: 362px;

}
.braya{
left: 414px;
    top: 316px;
}
.bfts{
        left: 476px;

    top: 298px;
}
.twya{
    left: 589px;
    top: 226px;
}
.jaj{
    left: 620px;
    top: 226px;
}

button{
    display: block;
    border: none;
    background: none;
    font-size: 20px;
    text-align: right;
    padding-right: 22px;
    width: 100%;
    cursor: pointer;
    color: inherit;
    
}


</style>

<script>
import {mapState} from 'vuex'

export default {
computed:{
    ...mapState({
        darkMode:state=>state.darkMode,
        current:state=>state.current
    }),
    data() {
        return {
            today: {}
        }}
}, 
    methods: {
        setpos(pos){
            this.$store.dispatch('togglehome',pos)
        }
    },
    mounted() {
        
    }

}
</script>