<template>
  <div class="sports-container">
    <h2>运动专区</h2>
    <ul class="sports-list">
      <li v-for="(item, index) in sportsList" :key="index" class="sports-item">
        <div class="sports-info">
          <h3>{{ item.title }}</h3>
          <p>类型: {{ item.type }}</p>
          <p>难度: {{ item.difficulty }}</p>
          <p>时长: {{ item.duration }}分钟</p>
        </div>
        <button @click="start(item)">开始</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SportsResource',
  data() {
    return {
      sportsList: [
        {
          title: '瑜伽入门',
          type: '瑜伽',
          difficulty: '初级',
          duration: 30
        },
        {
          title: '高强度间歇训练',
          type: 'HIIT',
          difficulty: '高级',
          duration: 20
        },
        {
          title: '晨跑计划',
          type: '跑步',
          difficulty: '中级',
          duration: 45
        },
        {
          title: '力量训练',
          type: '健身',
          difficulty: '中级',
          duration: 60
        },
        {
          title: '普拉提',
          type: '普拉提',
          difficulty: '初级',
          duration: 40
        }
      ]
    }
  },
  methods: {
    start(item) {
      console.log('开始运动：', item.title)
    }
  }
}
</script>

<style scoped>
.sports-container {
  padding: 20px;
}

.sports-list {
  list-style: none;
  padding: 0;
}

.sports-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  background: #f5f5f5;
  transition: background 0.3s ease;
}

.sports-item:hover {
  background: #e0e0e0;
}

.sports-info h3 {
  margin: 0 0 5px;
  font-size: 16px;
}

.sports-info p {
  margin: 5px 0;
  font-size: 14px;
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
