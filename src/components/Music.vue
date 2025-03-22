<template>
  <div class="music-container">
    <h2>音乐资源区</h2>
    <ul class="music-list">
      <li v-for="(item, index) in musicList" :key="index" class="music-item">
        <div class="music-info">
          <div class="cover">
            <img :src="item.cover" :alt="item.title">
          </div>
          <div class="details">
            <h3>{{ item.title }}</h3>
            <p>歌手: {{ item.artist }}</p>
            <p>专辑: {{ item.album }}</p>
            <p>时长: {{ item.duration }}</p>
            <p>风格: {{ item.genre }}</p>
          </div>
        </div>
        <button @click="play(item)">播放</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MusicResource',
  data() {
    return {
      musicList: [
        {
          title: '夜曲',
          artist: '周杰伦',
          album: '十一月的萧邦',
          duration: '4:12',
          genre: '流行',
          cover: 'https://picsum.photos/100/100?random=1'
        },
        {
          title: '海阔天空',
          artist: 'Beyond',
          album: '乐与怒',
          duration: '5:24',
          genre: '摇滚',
          cover: 'https://picsum.photos/100/100?random=2'
        },
        {
          title: '平凡之路',
          artist: '朴树',
          album: '猎户星座',
          duration: '4:55',
          genre: '民谣',
          cover: 'https://picsum.photos/100/100?random=3'
        },
        {
          title: '富士山下',
          artist: '陈奕迅',
          album: 'What\'s Going On...?',
          duration: '4:19',
          genre: '流行',
          cover: 'https://picsum.photos/100/100?random=4'
        },
        {
          title: '晴天',
          artist: '周杰伦',
          album: '叶惠美',
          duration: '4:29',
          genre: '流行',
          cover: 'https://picsum.photos/100/100?random=5'
        }
      ]
    }
  },
  methods: {
    play(item) {
      console.log('开始播放：', item.title)
    }
  }
}
</script>

<style scoped>
.music-container {
  padding: 20px;
}

.music-list {
  list-style: none;
  padding: 0;
}

.music-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.music-info {
  display: flex;
  align-items: center;
}

.cover img {
  width: 60px;
  height: 60px;
  margin-right: 15px;
  border-radius: 50%;
}

.details h3 {
  margin: 0 0 5px;
  font-size: 18px;
}

.details p {
  margin: 5px 0;
  font-size: 14px;
  color: #666;
}

button {
  padding: 8px 16px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
</style>
