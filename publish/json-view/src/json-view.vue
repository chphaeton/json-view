<template>
  <div class="json-view">
    <template v-for="(dom, idx) in domArr">
      <div class="row" :key="idx" v-if="!dom.hide"
           :class="{hover:dom.hover}"
           @mouseenter="mouseenter(dom)"
           @mouseleave="mouseenter(dom,'out')"
      >
        <span class="tab" :style="{paddingLeft:16*dom.tab+'px'}"></span>
        <span class="key" v-if="!dom.hideKey">
        <span v-if="dom.hasChildren" @click="getFold(dom)">
          <i class="plus" v-if="dom.fold"></i>
          <i class="minus" v-else></i>
        </span>
        {{ dom.key }}</span>
        <span class="colon" v-if="dom.hasColon">:</span>
        <span class="value" :class="dom.type">{{ dom.fold ? dom.foldView : dom.value }}</span>
        <span class="" v-if="!dom.noComma">,</span>
      </div>
    </template>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        domArr: [],
      }
    },
    created() {
      if (this.data) this.buildArr(this.data)
    },
    methods: {
      buildArr(data, tab = 1, ftype) {
        const keys = Object.keys(data)
        // keys.sort()
        const domArr = []
        if (tab === 1) {
          ftype = Array.isArray(data) ? 'array' : typeof data
        }
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i]
          const item = data[key]
          const isArr = Array.isArray(item)
          let type = typeof item
          if (isArr) {
            type = 'array'
          }
          const isObj = !isArr && type === 'object'
          const dom = {tab, key: `"${key}"`, type, ftype, hasColon: true}
          if (ftype === 'array') {
            dom.hideKey = true
            dom.hasColon = false
          }
          const len = typeof item === 'object' && item ? Object.keys(item).length : 0
          if (type === 'symbol') {
            dom.value = String(item)
          } else if (type === 'boolean') {
            dom.value = String(item)
            dom.type = 'boolean bolder'
          } else if (type === 'function') {
            dom.value = String(item)
          } else if (!item && item !== 0 && item !== '') {
            dom.value = String(item)
            dom.type = dom.value
          } else if (isArr) {
            dom.value = len ? '[' : '[]'
            dom.hasChildren = !!len
            // dom.noComma = true
          } else if (isObj) {
            dom.value = len ? '{' : '{}'
            dom.hasChildren = !!len
            // dom.noComma = true
          } else if (type === 'string') {
            dom.value = `"${data[key]}"`
          } else if (type === 'number') {
            dom.value = data[key]
          }
          domArr.push(dom)
          if (isArr && item.length || isObj && item && Object.keys(item).length) {
            domArr.push(...this.buildArr(item, tab + 1, type))
            if (isArr) {
              domArr.push({value: ']', tab, childrenEnd: true})
            } else {
              domArr.push({value: '}', tab, childrenEnd: true})
            }
          }
        }
        if (tab === 1) {
          if (Array.isArray(data)) {
            domArr.unshift({value: '[', tab: 0, noComma: true, hasChildren: true})
            domArr.push({value: ']', tab: 0, noComma: true, childrenEnd: true})
          } else if (typeof data === 'object') {
            domArr.unshift({value: '{', tab: 0, noComma: true, hasChildren: true})
            domArr.push({value: '}', tab: 0, noComma: true, childrenEnd: true})
          }
          for (let i = 1; i < domArr.length; i++) {
            const item = domArr[i]
            if ([']', '}', '],', '},'].includes(item.value)) {
              domArr[i - 1].noComma = true
            }
          }
          this.domArr = domArr
        }
        return domArr
      },
      mouseenter(dom, type) {
        dom.hover = type !== 'out'
        this.$forceUpdate()
        const idx = this.domArr.indexOf(dom)
        let i
        if (dom.hasChildren) {
          i = idx + 1
          for (; i < this.domArr.length; i++) {
            const item = this.domArr[i]
            if (item.tab > dom.tab) {
              item.hover = type !== 'out'
            } else {
              break
            }
          }
        }
        if (dom.childrenEnd) {
          i = idx - 1
          for (; i > -1; i--) {
            const item = this.domArr[i]
            if (item.tab > dom.tab) {
              item.hover = type !== 'out'
            } else {
              break
            }
          }
        }
        if (this.domArr[i]) {
          this.domArr[i].hover = type !== 'out'
        }
        this.$forceUpdate()
      },
      getFold(dom) {
        dom.fold = !dom.fold
        if (dom.value === '[') {
          dom.foldView = '[...]'
        } else {
          dom.foldView = '{...}'
        }
        for (let i = this.domArr.indexOf(dom) + 1; i < this.domArr.length; i++) {
          const item = this.domArr[i]
          if (item.tab > dom.tab) {
            item.hide = dom.fold
          } else {
            item.hide = dom.fold
            break
          }
        }
        this.$forceUpdate()
      },
      // methods ----- ----- ----- methods⥣ ----- vuexmap⥥ ----- ----- ----- ----- -----
    },
    props: {
      data: {
        type: [Object, Array],
      },
    },
    name: 'JsonView',
  }
</script>
<style lang="less" scoped>
.json-view {
  //padding: 100px;
  color: #660E7A;

  .row {
    display: flex;
    padding: 4px 10px 4px 20px;
    line-height: 20px;
  }

  .hover {
    background: #def;
  }

  .number {
    color: #0000FF;
  }

  .string {
    color: #008000;
  }

  .symbol {
    color: #c10000;
  }

  .null {
    color: #a10f85;
  }

  .undefined {
    color: #2a323a;
  }

  .boolean, .function {
    color: #000080;
  }

  .bolder {
    font-weight: 500;
  }

  .colon {
    padding: 0 3px;
  }

  .key {
    position: relative;
  }

  i {
    font-style: normal;
    position: absolute;
    left: -16px;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid #660E7A;
    cursor: pointer;
    width: 10px;
    height: 10px;

    &:before, &:after {
      display: block;
      width: 8px;
      height: 2px;
      background: #660E7A;
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &:after {
      width: 2px;
      height: 8px;
    }
  }

  .minus {
    &:after {
      display: none;
    }
  }
}
</style>
