

function funcDecorator(target, name, descriptor){
    let originalMethod = descriptor.value
    descriptor.value = function(){
        console.log('new func');
        return originalMethod.apply(this, arguments)
    }
    return descriptor
}

class Button {
    @funcDecorator
    onClick(){
        console.log('old func');
    }
}

