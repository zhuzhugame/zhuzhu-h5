<template>
  <div>
    <van-cell-group>
      <van-cell
        v-for="friend in friends"
        :key="friend.targetPigId"
        :title="friend.targetPig.name"
        value="操作"
        label="我的备注"
      />
    </van-cell-group>
  </div>
</template>

<script>
import { FriendService } from '../service/friend.service'

export default {
  name: 'Friend',
  data() {
    return {
      friends: []
    }
  },
  created() {
    this.getFriends()
  },
  methods: {
    async getFriends() {
      const friends = await FriendService.getList()
      this.friends = friends
    }
  }
}
</script>

<style scoped>
</style>
