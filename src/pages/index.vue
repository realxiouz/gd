<template>
  <div>
    <div v-if="bean" class="item-weapon">
      <div class="item-bitmap-container">
        <div class="item-bitmap-background bg-legendary"></div>
        <div class="item-bitmap itemdb" :class="bean.bgClass"></div>
      </div>
      <div>
        <div>{{bean.level}}</div>
        <div><span v-if="bean.tag">{{bean.tag}}</span>{{bean.name}}</div>
        <div>{{bean.des}}</div>
        <div v-for="(i, inx) in bean.skills" :key="inx">
          <div v-if="i.all">{{i.role}} 的所有技能 {{i.level}}</div>
          <div v-else>{{i.role}} 技能等级 {{i.level}}</div>
        </div>
        <div>物品等级: {{bean.origin.itemLevel}}</div>
        <div>需要玩家等级: {{bean.origin.k}}</div>
        <div v-if="bean.itemSkill">
          <div>授予技能</div>
          <div>{{bean.itemSkill.name}}</div>
          <div>{{bean.itemSkill.des}}</div>
          <div v-if="bean.itemSkill.coolDown">{{bean.itemSkill.coolDown}}</div>
          <div v-if="bean.itemSkill.active">{{bean.itemSkill.active}}</div>
          <div v-if="bean.itemSkill.activeLifeCost">{{bean.itemSkill.activeLifeCost}}</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatBean } from '@/utils/const'

export default {
  created() {
    // this.bean = formatBean(allItems[`it${this.$route.query.id}`])
  },
  data() {
    return {
      bean: {},
    }
  },
  watch: {
    '$route.query.id': {
      handler(val) {
        this.getBean(val)
        console.log(this.bean.itemSkill)
      },
      immediate: true,
    },
  },
  methods: {
    getBean(id) {
      this.bean = formatBean(allItems[`it${id}`])
    },
  },
};
</script>
