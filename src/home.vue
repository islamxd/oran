<template>

    <transition name="scale">
        <div class="panel" :class="{dark:darkMode}">
            <div></div>
            <h1>
                welcom to Discovery App 
            </h1>
            <div><img src="./assets/logo.png"/></div>
            <h4>welcom to Discovery App welcom to Discovery App </h4>
            <div></div>
        </div>
    </transition >
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed:{
        ...mapState({
            darkMode : state => state.darkMode
        })
    }
}
</script>

<style scoped>
    .panel{
        position: absolute;
        bottom: 20px;
        flex: 0 0 auto;
        width: 95vw;
        height: 85vh;
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        align-content: center;
    }
    img{
        aspect-ratio: 1/1;
        width:  200px;
        animation: rot 5s ease-in-out infinite ;
    }
@keyframes rot {
    0%{
        transform: rotateY(0deg);
    }
    50%{
        transform: rotateY(360deg);
    }
    100%{
        transform: rotateY(0deg);
    }
}
</style>