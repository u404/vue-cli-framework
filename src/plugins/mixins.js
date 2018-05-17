const install = function (Vue, options) {
    Vue.mixin ({
        created() {
            if (this.config) {
                this.$ajax.get('/resources/data/' + this.config).then((res) => {
                    this.config = res.data;
                });
            }
        }
    });
};

export default {
    install
}