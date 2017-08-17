import axios from 'axios'

var utils = {}
window && (window.utils = utils)
global && (global.utils = utils)

utils.ajax = {
    post(){
        return axios.post.apply(axios, arguments)
    },
    get(){
        return axios.get.apply(axios, arguments)
    },
    put(){
        return axios.put.apply(axios, arguments)
    },
    delete(){
        return axios.delete.apply(axios, arguments)
    },
    patch(){
        return axios.patch.apply(axios, arguments)
    },
    head(){
        return axios.head.apply(axios, arguments)
    },
    request () {
      return axios.request.apply(axios, arguments)
    }
}

utils.localStorage = {
    set(key, value){
        localStorage[key] = JSON.stringify(value||null);
    },
    get(key){
        return JSON.parse(localStorage[key]||null);
    }
}

utils.sessionStorage = {
    set(key, value){
        localStorage[key] = JSON.stringify(value||null);
    },
    get(key){
        return JSON.parse(localStorage[key]||null);
    }
}
/**
 * cookie 操作方法，需要注意的是，一定不能设置多个path或domain不同而name相同的cookie，否则可能出现无法正确取值和无法销毁的问题
 */
utils.cookie = {
    set(key, value, domain='', path='/', expireDays=7){
        var val = escape(JSON.stringify(value||null));
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + expireDays);
        var expires = expireDate.toGMTString();
        document.cookie = `${key}=${val};expires=${expires};domain=${domain};path=${path}`;
    },
    get(key){
        var arr,reg=new RegExp("(^| )"+key+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
            return JSON.parse(unescape(arr[2])||null);
        }
        else{
            return null;
        }
    },
    remove(key, domain='', path='/'){
        this.set(key, null, domain, path, -1);
    }
}
/**
 * 安全设置cookie，完全避免出现多个不同domain或不同path的同名cookie，而引起的值获取混乱的问题
 */
utils.cookieSafe = {
    set(key, value, domain='', path='/', expireDays=7){
        expireDays > 0 && this.remove(key);
        var val = escape(JSON.stringify({
            domain,
            path,
            value
        }));
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + expireDays);
        var expires = expireDate.toGMTString();
        document.cookie = `${key}=${val};expires=${expires};domain=${domain};path=${path}`;
    },
    __get(key){
        var arr,reg=new RegExp("(^| )"+key+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
            return JSON.parse(unescape(arr[2])||null);
        }
        else{
            return null;
        }
    },
    get(key){
        return this.__get(key).value;
    },
    remove(key){
        var cookie = this.__get(key);
        if(cookie) {
            this.set(key, null, cookie.domain, cookie.path, -1);
        }
    }
}


export default utils