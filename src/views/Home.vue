<template>
  <div class="home-container">
    <nav class="navbar">
      <ul>
        <li v-for="(item, index) in navItems" 
            :key="index"
            @click="selectNav(item)"
            :class="{ active: currentNav === item }">
          {{ item }}
        </li>
      </ul>
    </nav>
    
    <div class="content">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script>
import MusicResource from '../components/Music.vue'
import MovieResource from '../components/Movie.vue'
import SportsResource from '../components/Sports.vue'
import NovelResource from '../components/Novel.vue'
import ImageResource from '../components/Image.vue'

export default {
  name: 'HomeView',
  components: {
    MusicResource,
    MovieResource,
    SportsResource,
    NovelResource,
    ImageResource
  },
  data() {
    return {
      navItems: ['音乐资源区', '影视资源区', '运动专区', '小说专区', '图片专区'],
      currentNav: '音乐资源区',
      currentComponent: 'MusicResource'
    }
  },
  methods: {
    selectNav(item) {
      this.currentNav = item
      this.currentComponent = this.getComponentName(item)
    },
    getComponentName(nav) {
      switch(nav) {
        case '音乐资源区': return 'MusicResource'
        case '影视资源区': return 'MovieResource'
        case '运动专区': return 'SportsResource'
        case '小说专区': return 'NovelResource'
        case '图片专区': return 'ImageResource'
      }
    }
  }
}
</script>

<style scoped>
.home-container {
  display: flex;
  height: 100vh;
}

.navbar {
  width: 200px;
  background: #2c3e50;
  color: white;
  padding: 20px;
}

.navbar ul {
  list-style: none;
  padding: 0;
}

.navbar li {
  padding: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 4px;
}

.navbar li:hover {
  background: #34495e;
}

.navbar li.active {
  background: #42b983;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
