const install = function(Vue, options){
    Vue.mixin({
        created(){
            if(this.config){
                this.$ajax.get('/static/data/' + this.config).then((res) => {
                    this.config = res.data;
                });
            }
        }
    });
};

export default {
    install
}