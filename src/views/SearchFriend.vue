<template>
  <div>
    <van-search
      v-model="value"
      shape="round"
      show-action
      placeholder="搜索猪猪ID、昵称"
      action-text="返回"
      input-align="center"
      @search="search"
      @cancel="goBack"
    />
    <van-cell-group>
      <van-cell
        v-for="friendSearchVo in friendSearchVos"
        :key="friendSearchVo.pig.id"
        :title="friendSearchVo.pig.name"
        :value="friendSearchVo.pig.shortId"
      >
        <template #default>
          <van-icon
            :name="getIconName(friendSearchVo.state)"
            style="margin-right: 8px"
            @click="addFriend(friendSearchVo)"
          />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { FriendService } from '../service/friend.service'
import { Dialog } from 'vant'

export default {
  name: 'SearchFriend',
  data() {
    return {
      friendSearchVos: [],
      value: '',
      addIcon: 'plus'
    }
  },
  methods: {
    getIconName(state) {
      switch (state) {
        case 'active':
          return 'success'
        case 'init':
          return 'minus'
        default:
          return 'plus'
      }
    },
    async search() {
      const friendSearchVos = await FriendService.search(this.value)
      this.friendSearchVos = friendSearchVos
    },
    async addFriend(friendSearchVo) {
      if (friendSearchVo.state === 'active' || friendSearchVo.state === 'init')
        return
      try {
        await Dialog.confirm({
          message: `确认添加 ${friendSearchVo.pig.name} 为猪友嘛?`
        })
        await FriendService.add(friendSearchVo.pig._id)
        await this.search()
      } catch {}
    },
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
</style>
