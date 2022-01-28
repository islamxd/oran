<template>
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css">

    <transition name="scale">
        <div class="navbar panel" :class="{dark:darkMode}">
        <div class="flexible"> 
            <button @click="homeT.click()"  :class="{dark:darkMode}"> 
                <h1>{{homeT.title}}</h1>
            </button>
                <img :src="homeT.icon"  class="logo">
        </div>
        <div class="flexible">
            <div v-for="(item,id) in items" :key="id" >
                <button @click="item.click()" :class="{dark:darkMode}">
                    <i :class="item.icon" class="icons"/>
                    <h4>{{item.title}}</h4>
                </button>
            </div>
        </div>
        <div class="flexible controls">
            <div class="flexible" >
            <button  @click=" this.switchLang()" :class="{dark:darkMode}" > 
                    <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.5/flags/1x1/us.svg"  class="dark-icon" :class="{hide:lang}" >
                    <img src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.5/flags/1x1/dz.svg"  class="light-icon" :class="{hide:!lang}"  >
            </button>
            </div>
            <div class="flexible" >
            <button  @click=" this.toggleDarkMode()" :class="{dark:darkMode}" >
                    <img src="https://img.icons8.com/external-dreamstale-green-shadow-dreamstale/64/000000/external-moon-education-and-research-dreamstale-green-shadow-dreamstale.png" alt="" class="dark-icon" :class="{hide:darkMode}" >
                    <img src="https://img.icons8.com/doodle/48/000000/sun--v1.png" alt="" class="light-icon" :class="{hide:!darkMode}"  >
            </button>
            </div>
            
        </div>
    </div>
    </transition>

</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
            lang: state => state.lang,
            Services: state=>state.Services
        }),
            homeT(){
                   return { title: "Oran Discovery ", active:true, icon:require("@/assets/logo.png"), click:this.toggleHome}
            }
        ,
        items(){
            return [
                            { title: "Hotels ", active:false, icon:"fa fa-bed", click:this.toggleHotels},
                            { title: "Restaurants  and cafterias ", icon:"fa fa-utensils", active:false, click:this.toggleRestaurent},
                            { title: "Entertainments ", active:false, icon:"fa fa-snowboarding", click:this.toggleEntertain},
                            { title: "Historical  places ", active:false, icon:"fa fa-place-of-worship", click:this.togglePlaces},
                            { title: "map ", active:false, icon:"fas fa-map-marker-alt", click:this.togglMap},
                            { title: " login", active:false, icon:"fa fa-user-circle", click:this.toggleForm}
                        ]
                     }
        },
           data() {
        return {
            today: {}
        }
    },
    methods: {
        toggleDarkMode() {
            this.$store.dispatch('toggleDarkMode')
        },
        none() {},
        toggleHome(){
            this.$store.dispatch('toggleHome')
        },
        togglMap(){
             this.$store.dispatch('toggleMap')
        },
        toggleRestaurent(){
            this.$store.dispatch('togglePanel'),
            this.$store.dispatch('setServices','Restaurant')
        },
        toggleHotels(){
            this.$store.dispatch('togglePanel'),
            this.$store.dispatch('setServices','Hotel')
        },
        togglePlaces(){
            this.$store.dispatch('togglePanel'),
            this.$store.dispatch('setServices','Historic milestone')
        },
        toggleEntertain(){
            this.$store.dispatch('togglePanel'),
            console.log(this.Services)
            this.$store.dispatch('setServices','Entertainment')

        },
        toggleForm(){
            this.$store.dispatch('togglelogin')
        },
        switchLang(){
            this.$store.dispatch('switchLang')
        }
    },
        mounted() {
    }
}
</script>
<style scoped>
    .navbar{
        width: 100%;
        height: var(--navber-height);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index:999;
    }
    .flexible{
        flex: auto;
        display: inline-flex;
        height: 100%;
        justify-content: space-between;
    }
    .flexible   :first-child{
        flex: 2;
    }
    button{
            flex: auto;
            width: auto;
            height: 100%;
            display: inline-block;
            padding: 10px;
            border:none;
            background-color: transparent;
    }
    .active{
        background: rgba(21, 24, 221, 0.92);
    }
    .icon{
        height: 100%;
        width: var(--navber-height);
        vertical-align: middle;
    }
    .icons{
        width: var(--navber-height);
        vertical-align: middle;
    }
    .dark-icon, .light-icon{
        position: absolute;
        top:10px;
        height: 25px;
        width: 25px;
        transition: 0.2s ease-in-out;
        opacity: 100%;
        border-radius: 100%;
    }
    .dark-icon.hide{
        transform: rotate(45deg);
        opacity: 0;
    }
    .light-icon.hide{
    transform: rotate(-45deg);
    opacity: 0;
}
h1, h4 {
    text-align: center;
    width: auto;
    height: auto  ;
    text-align:center;
}
.controls{
    flex: 1 2 auto;
    display: inline-flex;
}
.logo{
    align-self: center;
    width: 50px;
    height: 50px  ;
}
</style>