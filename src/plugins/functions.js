import utils from '../assets/scripts/utils';
const install = function(Vue, options){
    Vue.prototype.$ajax = utils.ajax
};

export default {
    install
}