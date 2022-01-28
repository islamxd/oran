<template>
    <transition  name="shiftup">
        <div class="panel" :class="{dark:darkMode}"  :key="componentKey">
            <div class="container"> 
                <Card v-for="(service,it) in items" :key="it"     :v-if="service.category===Services"
                    :serviceName="service.serviceName"
                    :category="service.category"
                    :viewimg ="service.view"
                    :adress="service.adress"
                    :about="service.about"/> 
            </div>
        </div>
    </transition>
</template>

<script>
import servs from './servs.json'
import Card from './card.vue'
import {mapState} from 'vuex'

export default {
    components : {Card},
    computed:{
        ...mapState({
            darkMode : state => state.darkMode,
            Services : state => state.Services,
            componentKey : state=>state.componentKey
        }),
        items: function () {
                            return servs.filter(i => i.category=== this.Services)
                        },
    }
}
</script>

<style scoped>
.panel{
    position: absolute;
    height: 85vh;
    margin: 10px;
    bottom: 20px;
    overflow: hidden;
    backface-visibility: hidden;
}
.container{
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    transition: 0.4s ease;
}
*::-webkit-scrollbar {
	background-color: transparent;
	width: 8px;
}

*::-webkit-scrollbar-thumb {
	border-radius: 99px;
	background-color: #fff;
	border: none;
}
.shiftup-enter-active,
.shiftup-leave-active {
  transition: all 1s ease;
}

.shiftup-leave-to, .shiftup-enter-from{
    transform: rotateX(180deg);
  opacity: 0;
}
</style>