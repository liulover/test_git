<template>
  <div class="login-container">
    <div class="stars"></div>
    <div class="login-form">
      <h2>用户登录</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label>用户名</label>
          <input v-model="username" type="text" required>
        </div>
        <div class="form-group">
          <label>密码</label>
          <input v-model="password" type="password" required>
        </div>
        <div class="form-group" v-if="showCaptcha">
          <label>验证码</label>
          <div class="captcha-container">
            <input v-model="userCaptcha" type="text" required>
            <div class="captcha-display" @click="generateCaptcha">
              {{ captchaText }}
            </div>
          </div>
        </div>
        <button type="submit">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ElMessage } from 'element-plus'

export default {
  name: 'UserLogin',
  data() {
    return {
      username: '',
      password: '',
      errorCount: 0,
      showCaptcha: false,
      captchaText: '',
      userCaptcha: '',
      maxAttempts: 3
    }
  },
  methods: {
    async login() {
      if (this.errorCount >= this.maxAttempts) {
        ElMessage.error('尝试次数已用完，请稍后再试')
        return
      }

      try {
        const response = await axios.post('http://localhost:8081/api/users/login', {
          username: this.username,
          password: this.password
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          withCredentials: true
        })
        console.log(response.data)
        // 判断返回的数据是否为"登录成功"
        if (response.data =="登录成功") {
          // 判断是否需要验证码
          if (this.showCaptcha) {
            // 判断用户输入的验证码是否与生成的验证码相同
            if (this.userCaptcha.toLowerCase() !== this.captchaText.toLowerCase()) {
              // 如果不相同，弹出提示框，并重新生成验证码
              ElMessage.error('验证码错误')
              this.generateCaptcha()
              return
            }
          }
          // 将登录状态保存到localStorage中
          localStorage.setItem('isAuthenticated', 'true')
          // 跳转到首页
          this.$router.push({ path: '/home' })
        } else {
          // 如果返回的数据不是"登录成功"，抛出错误
          throw new Error('Invalid credentials')
        }
      } catch (error) {
        this.errorCount = Math.min(this.errorCount + 1, this.maxAttempts)
        if (this.errorCount >= this.maxAttempts) {
          this.showCaptcha = true
          this.generateCaptcha()
        }
        const remainingAttempts = this.maxAttempts - this.errorCount
        ElMessage.error(`用户名或密码错误，剩余尝试次数：${remainingAttempts > 0 ? remainingAttempts : 0}`)
      }
    },
    // 生成验证码
    generateCaptcha() {
      // 定义验证码字符集
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
      // 初始化验证码
      let captcha = ''
      // 循环4次，生成4位验证码
      for (let i = 0; i < 4; i++) {
        captcha += chars[Math.floor(Math.random() * chars.length)]
      }
      this.captchaText = captcha
    }
  }
}
</script>

<style scoped>
.login-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  animation: twinkle 5s infinite;
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
}

.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.captcha-container {
  display: flex;
  gap: 0.5rem;
}

.captcha-display {
  padding: 0.5rem;
  background: #eee;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
}

button {
  width: 100%;
  padding: 0.5rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
