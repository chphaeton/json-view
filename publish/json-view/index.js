import JsonView from './src/json-view'

JsonView.install = Vue => {
    Vue.component(JsonView.name, JsonView)
}

export default JsonView
