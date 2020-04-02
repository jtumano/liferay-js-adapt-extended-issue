import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

export default function main({
	contextPach,
	config,
	portletElementId,
	portletNamespace
}: any) {
	new Vue({
		render: h => h(App)
	}).$mount(`#${portletElementId}`);
}
