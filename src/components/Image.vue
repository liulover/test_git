<template>
  <div class="image-container">
    <h2>图片专区</h2>
    <div class="image-grid">
      <div v-for="(item, index) in imageList" :key="index" class="image-item">
        <img :src="item.url" :alt="item.title" class="image">
        <div class="image-info">
          <h3>{{ item.title }}</h3>
          <p>作者: {{ item.author }}</p>
          <p>分辨率: {{ item.resolution }}</p>
        </div>
        <button @click="view(item)">查看</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageResource',
  data() {
    return {
      imageList: [
        {
          title: '星空',
          author: '摄影师A',
          resolution: '1920x1080',
          url: 'https://picsum.photos/300/200?random=1'
        },
        {
          title: '日落',
          author: '摄影师B',
          resolution: '1920x1080',
          url: 'https://picsum.photos/300/200?random=2'
        },
        {
          title: '森林',
          author: '摄影师C',
          resolution: '1920x1080',
          url: 'https://picsum.photos/300/200?random=3'
        },
        {
          title: '城市夜景',
          author: '摄影师D',
          resolution: '1920x1080',
          url: 'https://picsum.photos/300/200?random=4'
        },
        {
          title: '海滩',
          author: '摄影师E',
          resolution: '1920x1080',
          url: 'https://picsum.photos/300/200?random=5'
        },
        {
          title: '山脉',
          author: '摄影师F',
          resolution: '1920x1080',
          url: 'https://picsum.photos/300/200?random=6'
        },
        {
          title: '极光',
          author: '摄影师G',
          resolution: '1920x1080',
          url: 'https://picsum.photos/300/200?random=7'
        },
        {
          title: '瀑布',
          author: '摄影师H',
          resolution: '1920x1080',
          url: 'https://picsum.photos/300/200?random=8'
        },
        {
          title: '沙漠',
          author: '摄影师I',
          resolution: '1920x1080',
          url: 'https://picsum.photos/300/200?random=9'
        }
      ]
    }
  },
  methods: {
    view(item) {
      console.log('查看图片：', item.title)
    }
  }
}
</script>

<style scoped>
.image-container {
  padding: 20px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.image-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.image-item:hover {
  transform: translateY(-5px);
}

.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.image-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
}

.image-info h3 {
  margin: 0 0 5px;
  font-size: 16px;
}

.image-info p {
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
