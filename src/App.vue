<template>
  <div id="app">
    <header>
      <div class="title">Modbus IDS</div>
      <div class="username">
        <span>{{user}}</span>
        <span class="log" @click="quit">退出</span>
      </div>
    </header>
    <div class="container">
      <div class="side">
        <navi-menu @on-select-menu="naviChange"></navi-menu>
      </div>
      <main>
          <div class="content">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
          <footer>A TEST FOR @VUE/CLI + EXPRESS</footer>
      </main>
    </div>
  </div>
</template>

<script>
import NaviMenu from './components/NaviMenu.vue'

export default {
  name: 'app',
  data () {
    return {
      user: 'admin'
    }
  },
  components: {
    NaviMenu
  },
  methods: {
    naviChange () {
      
    },
    quit () {
      
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E74;
}
header {
  height: 60px;
  background: #2C3E74;
  color:white;
  flex: none;
}
.title {
  float: left;
  width: 200px;
  height: 100%;
  text-align: center;
  line-height: 60px;
}
.username {
  float: right;
  line-height: 60px;
  margin: 0 20px;
}
.log {
  color:chocolate; 
  margin-left: 10px;
}
.log:hover {
  background:greenyellow;
}
.container { 
  flex: 1;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: row;
}
.side {
  width: 200px;
  height: 100%;
  flex: none;
  background: #2C3E74;
}
main {
  min-height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.content {
  flex: 1;
}
footer {
  height: 50px;
  flex: none;
  text-align: center;
  line-height: 50px;
}
</style>
