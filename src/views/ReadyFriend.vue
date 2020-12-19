<template>
  <div>
    <van-grid direction="horizontal" :column-num="1" clickable>
      <van-grid-item icon="back-o" text="返回" @click="goBack" />
    </van-grid>
    <van-cell-group>
      <van-cell
        v-for="friend in readyConfirmFriends"
        :key="friend.sourcePigId"
        :title="`${friend.sourcePig.name} 想成为你的猪友`"
      >
        <template #default>
          <van-button
            size="small"
            icon="success"
            plain
            type="primary"
            style="margin-right: 8px"
            @click="confirm(friend._id)"
          ></van-button>
          <van-button
            size="small"
            icon="cross"
            plain
            type="primary"
            @click="reject(friend._id)"
          ></van-button>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { FriendService } from '../service/friend.service'

export default {
  name: 'ReadyFriend',
  data() {
    return {
      readyConfirmFriends: []
    }
  },
  created() {
    this.getReadyConfirmFriends()
  },
  methods: {
    async getReadyConfirmFriends() {
      const readyConfirmFriends = await FriendService.getReadyConfirmList()
      this.readyConfirmFriends = readyConfirmFriends
    },
    goBack() {
      this.$router.back()
    },
    async confirm(id) {
      await FriendService.confirm(id)
      await this.getReadyConfirmFriends()
    },
    async reject(id) {
      await FriendService.reject(id)
      await this.getReadyConfirmFriends()
    }
  }
}
</script>

<style scoped>
</style>
