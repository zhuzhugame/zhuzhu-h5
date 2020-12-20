<template>
  <div>
    <van-grid direction="horizontal" :column-num="2" clickable>
      <van-grid-item
        icon="chat-o"
        text="申请列表"
        :badge="
          readyConfirmFriends.length === 0 ? null : readyConfirmFriends.length
        "
        to="/game/ready_friend"
      />
      <van-grid-item icon="add-o" text="添加猪友" to="/game/search_friend" />
    </van-grid>
    <van-cell-group>
      <van-cell
        v-for="friend in friends"
        :key="friend.friendPigId"
        :title="friend.friendPig.name"
        label="我的备注"
      >
        <template #default>
          <van-button @click="deleteFriend(friend._id)" type="danger"
            >抛弃</van-button
          >
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { FriendService } from '../service/friend.service'

export default {
  name: 'Friend',
  data() {
    return {
      friends: [],
      readyConfirmFriends: []
    }
  },
  created() {
    this.getFriends()
    this.getReadyConfirmFriends()
  },
  methods: {
    async getFriends() {
      const friends = await FriendService.getList()
      this.friends = friends
    },
    async getReadyConfirmFriends() {
      const readyConfirmFriends = await FriendService.getReadyConfirmList()
      this.readyConfirmFriends = readyConfirmFriends
    },
    async deleteFriend(id) {
      await FriendService.delete(id)
      await this.getFriends()
    }
  }
}
</script>

<style scoped>
</style>
