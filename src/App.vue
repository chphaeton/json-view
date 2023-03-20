<template>
  <div id="app" class="app">
    <div class="textarea">
      <textarea v-model="textarea" @blur="blur" rows="12" cols="30"></textarea>
      <div v-if="err">你输入的json有误</div>
    </div>
    <json-view :data="data"></json-view>
  </div>
</template>

<script>
  // import data from './data.json'
  import data from '../package.json'

  data.g1 = [undefined]
  data.g2 = [null]
  data.g3 = [true]
  data.g4 = ['3']
  data.g5 = []
  export default {
    name: 'App',
    data() {
      return {
        data,
        err: false,
        textarea: '',
        // textarea: '\n\n{\n\nsdf:123\n\n,\n\ndf:23\n\n}\n\n',
      }
    },
    methods: {
      blur() {
        this.err = !true
        this.textarea = this.textarea.trim()
        if (!this.textarea) return
        this.textarea = this.textarea
            .replace(/\s+/g, $0 => $0[0])
            .replace(/\s+,/g, ',')
            .replace(/\n+,/g, ',')
            .replace(/,\n+/g, ',\n')
            .replace(/\n+,/g, ',')
            .replace(/[[{]\n+/g, $0 => $0.trim() + '\n')
            .replace(/[\]}]\n+/g, $0 => $0.trim() + '\n')
        // { sdf:123,df:23}
        const str = this.textarea.replaceAll('\n', '')
            // .replace(/({.+:)+/g, $0=>`"${$0}"`)
            .replace(/({.+?:)|(,.+?:)/g, $0 => {
              if ($0.includes('"')) return $0
              return $0.substr(0, 1) + '"' + $0.substr(1, $0.length - 2).trim() + '":'
            })
        try {
          const d = JSON.parse(str)
          if (typeof d !== 'object') {
            throw new Error()
          }
          this.data = d
        } catch (e) {
          this.err = true
        }
        // this.$forceUpdate()
        // console.log('-> this.textarea', str)
      },
    },
  }
</script>

<style lang="less" scoped>
.app {
  display: flex;

  .json-view {
    flex: 1 0 200px;
  }

  .textarea {
    flex: 0 0 200px;

    textarea {
      resize: none;
    }
  }
}
</style>
