<template>
  <div class="novel-container">
    <h2>小说专区</h2>
    <ul class="novel-list">
      <li v-for="(item, index) in novelList" :key="index" class="novel-item">
        <div class="novel-info">
          <div class="cover">
            <img :src="item.cover" :alt="item.title">
          </div>
          <div class="details">
            <h3>{{ item.title }}</h3>
            <p>作者: {{ item.author }}</p>
            <p>类型: {{ item.genre }}</p>
            <p>字数: {{ item.wordCount }}</p>
            <p>简介: {{ item.description }}</p>
          </div>
        </div>
        <button @click="read(item)">阅读</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NovelResource',
  data() {
    return {
      novelList: [
        {
          title: '三体',
          author: '刘慈欣',
          genre: '科幻',
          wordCount: '23万字',
          description: '地球文明向宇宙发出的第一声啼鸣',
          cover: 'https://picsum.photos/100/150?random=1'
        },
        {
          title: '活着',
          author: '余华',
          genre: '文学',
          wordCount: '12万字',
          description: '一个普通人的苦难人生',
          cover: 'https://picsum.photos/100/150?random=2'
        },
        {
          title: '平凡的世界',
          author: '路遥',
          genre: '文学',
          wordCount: '104万字',
          description: '普通人在大时代历史进程中的奋斗历程',
          cover: 'https://picsum.photos/100/150?random=3'
        },
        {
          title: '白夜行',
          author: '东野圭吾',
          genre: '推理',
          wordCount: '35万字',
          description: '一场跨越19年的悬疑故事',
          cover: 'https://picsum.photos/100/150?random=4'
        },
        {
          title: '百年孤独',
          author: '加西亚·马尔克斯',
          genre: '魔幻现实主义',
          wordCount: '26万字',
          description: '布恩迪亚家族七代人的传奇故事',
          cover: 'https://picsum.photos/100/150?random=5'
        }
      ]
    }
  },
  methods: {
    read(item) {
      console.log('开始阅读：', item.title)
    }
  }
}
</script>

<style scoped>
.novel-container {
  padding: 20px;
}

.novel-list {
  list-style: none;
  padding: 0;
}

.novel-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.novel-info {
  display: flex;
  align-items: center;
}

.cover img {
  width: 80px;
  height: 120px;
  margin-right: 15px;
  border-radius: 4px;
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
