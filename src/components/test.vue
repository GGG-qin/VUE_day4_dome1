<template>
    <div class="test-container">
        <h3 id="Myh3">Test.vue 组件 {{ books.length }} 本图书</h3>
        <hr>
        <p id="MyP">message的值是{{ message }}</p>
        <button @click="message += '~'">修改message的值</button>
    </div>
</template>

<script>
export default {
    props: ['info'],
    data() {
        return {
            message: 'hello vue.js',
            //定义books数组，存储的是所有图书的列表数据。默认为空数组！
            books: [],


        }
    },
    methods: {
        show() {
            console.log('调用了 Test 组件里的show方法！');
        },
        //使用Ajax请求图书列表数据
        initBookList() {
            const xhr = new XMLHttpRequest()
            xhr.addEventListener('load', () => {
                const result = JSON.parse(xhr.responseText);
                console.log(result);
                this.books = result.data
            })
            xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks')
            xhr.send('')
        }
    },
    beforeCreate() {  //创建前
        // console.log(this.info);
        console.log(this.message);
        // this.show();
    },
    created() {  //创建完成  
        //created生命周期函数非常常用
        //经常在他里面，调用 method 中的方法，请求服务器的数据
        // 并且，把请求到的数据，转存到 data 中，供 template 模板渲染的时候使用！
        console.log(this.info);
        console.log(this.message);
        this.show();
        this.initBookList();
    },
    beforeMount() {//页面渲染之前
        console.log('BeforeMount');
        const dom = document.querySelector('#Myh3');
        console.log(dom);
    },
    mounted() {//渲染完成后
        //最早操作dom元素的时候
        console.log('Mounted');
        const dom = document.querySelector('#Myh3');
        console.log(dom);
    },
    beforeUpdate() {//数据更新前
        console.log('beforeUpdate');
        console.log(this.message);
        const dom = document.querySelector('#MyP');
        console.log(dom.innerHTML);
    },
    updated() {//数据更新完成后
        //当数据变化之后，为了能够操作到最新的DOM结构，必须把代码写到updated生命周期函数里面
        console.log('updated');
        console.log(this.message);
        const dom = document.querySelector('#MyP');
        console.log(dom.innerHTML);

    },
    beforeDestroy(){//组件销毁前
        console.log('beforeDestroy');
        console.log(this.message);
    },
    destroyed(){//组件销毁后
        console.log('Destroyed');
    }
}
</script>

<style lang="less" scoped>
.test-container {
    background-color: #9c5f8a;
    height: 200px;
}
</style>