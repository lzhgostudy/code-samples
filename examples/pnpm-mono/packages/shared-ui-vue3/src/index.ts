import Button from "./components/Button.vue";

Button.install = (Vue: any) => {
  Vue.component(Button.__name, Button)
}

export { Button };

const components = [Button];

const install = function (Vue: any) {
  components.forEach((item) => {
    Vue.component(item.__name, item);
  })
}

export default {
  install,
}