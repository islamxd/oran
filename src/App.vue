<template>
<Navbar />
<Home v-show="home"/>
<pane  v-show="Panel"/>
<auth v-show="login"/>
<Loader v-show="false"/>
<oran v-if="mapon"/>
</template>
<script>
import Loader from './components/Loader.vue'
import auth from './components/auth.vue'
import Navbar from './components/navbar.vue'
import oran from './components/map.vue'
import Home from './home.vue'
import pane from './components/pane.vue'
import {mapState} from 'vuex'
export default {
  name: 'App',
  components: {
    Home,
    Navbar,
    pane,
    Loader,
    auth,
    oran
  },
  computed:{
    ...mapState({
        loading: state=> state.loading,
        home: state => state.home,
        Panel:state=>state.Panel,
        login: state => state.login,
        mapon: state=> state.mapon
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700;800&display=swap');
h1,h2,h3,h4,h5{
  font-family: 'Open Sans', sans-serif;
}
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: rgb(4,46,109);
  background: linear-gradient(9deg, rgba(4,46,109,1) 0%, rgba(202,205,252,1) 100%);
  padding: 5px;
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  align-items: center;
font-smooth: always;

}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root{
  --navber-height:50px;
        transition: .4s ease-in-out;
}
.panel{
        background: rgba(246, 246, 255, 0.96);
        border-radius: 10px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(178, 179, 233, 0.43);
        color: #2c3e50;
        transition: .4s ease-in-out;
        animation: gradient 15s ease infinite;
}

button{
        background: rgba(21, 24, 221, 0.92);
        border-radius: 10px;
        color : rgb(78, 81, 119);
        transition: .4s ease-in-out;
    }
    button.dark{
        color : rgb(219, 233, 248);

    }
.panel.dark{
        background: rgba(12, 13, 31, 0.92);
        border-radius: 10px;
        box-shadow: 0 4px 30px rgba(160, 160, 160, 0.1);
        border: 1px solid rgba(4, 6, 95, 0.43);
        color : white;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
    transform: scale(2);
  opacity: 0;
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
