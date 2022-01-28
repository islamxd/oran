
import Vuex from 'vuex'


export default new Vuex.Store({
    state: {

        loading: true,
        lang :localStorage.getItem('thisLang') ? localStorage.getItem('thisLang')=='true' : false,
        darkMode: localStorage.getItem('darkMode') ? localStorage.getItem('darkMode') === 'true' : false,
        home : true,
        Services:'Hotel',
        Panel:false,        
        login:false,
        componentKey:0,
        mapon: false,
        current : 'oran'
        
    },
    getters: {
        loading: state => state.loading
    },
    mutations: {

        SET_LOADING(state, status) {
            state.loading = status
        },

        SET_HOME(state, status) {
            state.home = status
        },

        SET_DARK_MODE_ENABLED(state, status) {
            state.darkMode = status
        },
        SET_PANEL(state,status){
            state.Panel=status
            state.componentKey+=1
        },
        SET_SERVICES(state,status){
            state.Services=status
        },
        SET_login(state,status){
            state.login=status
        },
        SET_LANG(state,status){
          state.lang=status
        },
        SET_MAP(state,status){
            state.mapon=status
        },
        
  SET_POS(state,status){
    state.current=status
    }
        
        
    },
    actions: {

        showBootScreen(context) {
            context.commit('SET_LOADING', true)
        },
        hideBootScreen(context) {
            context.commit('SET_LOADING', false)
        },

        toggleHome(context) {
            context.commit('SET_login',false),
            context.commit('SET_PANEL',false),
            context.commit('SET_HOME', true),
            context.commit('SET_MAP',false)
        },
        togglePanel(context) {
          context.commit('SET_login',false),
          context.commit('SET_PANEL',true),
          context.commit('SET_HOME', false),
          context.commit('SET_MAP',false)
        },
        setServices(context,service) {
          context.commit('SET_SERVICES',service)
        },
        togglelogin(context) {
          context.commit('SET_login',true),
          context.commit('SET_PANEL',false),
          context.commit('SET_HOME', false),
          context.commit('SET_MAP',false)
        },

        toggleDarkMode(context) {
            context.commit('SET_DARK_MODE_ENABLED', !context.state.darkMode)
            localStorage.setItem('darkMode', context.state.darkMode)
        },
        switchLang(context){
            context.commit('SET_LANG', !context.state.lang)
        },
        toggleMap(context){
            context.commit('SET_MAP',true),
            context.commit('SET_login',false),
            context.commit('SET_PANEL',false),
            context.commit('SET_HOME', false)
        },
        togglehome(context,pos) {
            context.commit('SET_POS',pos)
          }

    },
    modules: {}
})  
