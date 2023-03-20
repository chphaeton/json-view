# json-view
    import JsonView from 'json-view-lu'
    Vue.use(publish)

## 在component
    data(){
        return {
            data: {...}
            // 或
            data: [...]
        }
    }

## 在template
    <json-view :data="data"></json-view>

示例：https://chphaeton.github.io/json-view/

## 在react中
### todo
    import {generateJson} from 'json-view-lu'
    generateJson(json) // 输出array 
    // [ "tab", "key", "type", "fartherType", "hasColon", "hideKey", "value", "noComma", "hasChildren"]
    // 对应 缩进，key，类型，父对象类型[array，object]，冒号，array隐藏index，value，无逗号，有无children
