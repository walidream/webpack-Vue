<template>
  <div>
    <div>计数器的值为：{{ getCount }}</div>
    <div>
      <button @click="increment">
        +1
      </button>
      <button @click="reduction">
        -1
      </button>
    </div>
    <div>
      <button @click="asyncIncrement">
        每隔1s加1
      </button>
      <button @click="asyncReduction">
        每隔1s减1
      </button>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {

    };
  },
  computed: {
    getCount() {
      return this.$store.getters.getCount;
    },
  },
  methods: {
    increment() {
      this.$store.commit('incrementCount');
    },
    reduction() {
      this.$store.commit('reductionCount');
    },
    asyncIncrement() {
      this.$store.dispatch('asyncIncrementCount');
    },
    asyncReduction() {
      this.$store.dispatch('asyncReductionCount');
    },
  },
};
</script>
