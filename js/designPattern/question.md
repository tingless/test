        SingleDog.getInstance = (function(){
            let instance = null

            return function(){
                if(!instance){
                    instance = new SingleDog()
                }
                return instance
            }
        })()

        // 闭包的变量什么时候被销毁？因为instance一直被引用所以不会被销毁。

        // class中的static用法,constructor, 原型链
        // static的用法就是可以不被实例化就调用。constructor用来给实例化对象赋予属性
        // 原型链的知识
