<template>
    <transition name="scale">
    <div class="login">
        <div class="panel" :class="{dark:darkMode}">
            <form class="login-panel">
            <span class="material-icons">lock</span>
            <input type="text" placeholder="email"  />
            <input type="password" autocomplete="password"  />
            <button>login</button>
            </form>  
        </div>
    </div>
    </transition>
</template>
<script>
import {mapState} from 'vuex'
export default({
    computed : {
        ...mapState({ darkMode : state=>state.darkMode })
    }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');

body {
  background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
}

.login {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
  font-family: 'Comfortaa', cursive;
}

.panel {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  border-radius: 10px;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
}
.dark{
    background-color: rgba(1, 2, 22, 0.92);
}

.panel input {
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  border-radius: 5px;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  font-family: 'Comfortaa', cursive;
}

.panel input:focus {
  background: #dbdbdb;
}

.panel button {
  font-family: 'Comfortaa', cursive;    
  outline: 0;
  background: #4b6cb7;
  width: 100%;
  border: 0;
  border-radius: 5px;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}

.panel button:active {
  background: #395591;
}

.panel span {
  font-size: 75px;
  color: #4b6cb7;
}
</style>