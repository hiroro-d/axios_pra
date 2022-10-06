<template>
  <div>
    <p>GoogleBooksAPI</p>
    <input type="text" v-model="keyword">
    <button @click="btn">検索</button>
    <ul>
      <li v-for="data in datasComp" :key="data.keyword">
        {{ data.volumeInfo.title }} {{ data.volumeInfo.authors[0] }}
      </li>
    </ul>
    <p><img :src="catsComp" alt=""></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
    }
  },
  computed: { //読み込み時のタイムラグに対応するために、ここに書く。
    datasComp() {
      return this.$store.state.datas.items //配列の下の層を取得するときは、一気に書けないので、上に分けて書く。
    },
    catsComp() {
      return this.$store.state.catDatas.file
    }
  },

  methods: {
    fetchDatas() {
      this.$store.dispatch('fetchDatas', this.keyword)
    },
    fetchCats() {
      this.$store.dispatch('fetchCats')
    },

    btn() {
      this.fetchDatas()
      this.fetchCats()
      } //１個のボタンで２個発動させる場合は、２個の関数を括るボタンがいる。
  }
}
</script>

<style scoped>

li {
  text-align: left;
}

button {
  margin-left: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-size: 2rem;
}

button:hover {
  opacity: .6;
}

p {
  font-size: 5rem;
}

input {
  width: 500px;
  height: 50px;
  font-size: 2rem;
}

img {
  position: absolute;
  top: 50;
  left: 100;
  width: 300px;
  height: auto;
  border-radius: 50%;
}
</style>