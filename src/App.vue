<template>
  <div id="app">
    <header><div class="title">Modbus IDS</div></header>
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
          <footer>508 Lab @Jack Paul</footer>
      </main>
    </div>
  </div>
</template>

<script>
import NaviMenu from './components/NaviMenu.vue'

export default {
  name: 'app',
  components: {
    NaviMenu
  },
  methods: {
    naviChange () {
      
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
  flex: none;
}
.title {
  color:white;
  width: 200px;
  height: 100%;
  text-align: center;
  line-height: 60px;
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
