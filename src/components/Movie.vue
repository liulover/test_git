<template>
  <div class="movie-container">
    <h2>影视资源区</h2>
    <div class="movie-grid">
      <div v-for="(item, index) in movieList" :key="index" class="movie-item">
        <img :src="item.poster" :alt="item.title" class="poster">
        <div class="movie-info">
          <h3>{{ item.title }}</h3>
          <p>类型: {{ item.genre }}</p>
          <p>评分: {{ item.rating }}</p>
          <p>年份: {{ item.year }}</p>
        </div>
        <button @click="play(item)">播放</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieResource',
  data() {
    return {
      movieList: [
        {
          title: '肖申克的救赎',
          genre: '剧情',
          rating: '9.7',
          year: '1994',
          poster: 'https://picsum.photos/200/300?random=1'
        },
        {
          title: '阿甘正传',
          genre: '剧情',
          rating: '9.5',
          year: '1994',
          poster: 'https://picsum.photos/200/300?random=2'
        },
        {
          title: '泰坦尼克号',
          genre: '爱情',
          rating: '9.4',
          year: '1997',
          poster: 'https://picsum.photos/200/300?random=3'
        },
        {
          title: '盗梦空间',
          genre: '科幻',
          rating: '9.3',
          year: '2010',
          poster: 'https://picsum.photos/200/300?random=4'
        },
        {
          title: '星际穿越',
          genre: '科幻',
          rating: '9.3',
          year: '2014',
          poster: 'https://picsum.photos/200/300?random=5'
        },
        {
          title: '楚门的世界',
          genre: '剧情',
          rating: '9.2',
          year: '1998',
          poster: 'https://picsum.photos/200/300?random=6'
        },
        {
          title: '海上钢琴师',
          genre: '音乐',
          rating: '9.2',
          year: '1998',
          poster: 'https://picsum.photos/200/300?random=7'
        },
        {
          title: '千与千寻',
          genre: '动画',
          rating: '9.3',
          year: '2001',
          poster: 'https://picsum.photos/200/300?random=8'
        },
        {
          title: '教父',
          genre: '犯罪',
          rating: '9.3',
          year: '1972',
          poster: 'https://picsum.photos/200/300?random=9'
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
.movie-container {
  padding: 20px;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.movie-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.movie-item:hover {
  transform: translateY(-5px);
}

.poster {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.movie-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
}

.movie-info h3 {
  margin: 0 0 5px;
  font-size: 16px;
}

.movie-info p {
  margin: 5px 0;
  font-size: 14px;
}

button {
  position: absolute;
  top: 10px;
  right: 10px;
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
