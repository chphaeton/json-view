# json-view
    import JsonView from 'json-view-lu'
    Vue.use(publish)

# 在component
    data(){
        return {
            data: {...}
            // 或
            data: [...]
        }
    }

# 在template
    <json-view :data="data"></json-view>

示例：https://chphaeton.github.io/json-view/
