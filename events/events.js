class EventEmitter {
    listeners = {};

    addListener(event, fn) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(fn);
        console.log(this.listeners)
        return this;
    }

    on(eventName, fn) {
        return this.addListener(eventName, fn);
    }

    removeListener(eventName, fn) {
        const eventListeners = this.listeners[eventName];
        if (!eventListeners) {
            return this;
        }
        for (let i = eventListeners.length - 1; i >= 0; i--) {
            if (eventListeners[i] === fn) {
                eventListeners.splice(i, 1);
                break;
            }
        }
        return this;
    }

    off(eventName, fn) {
        return this.removeListener(eventName, fn);
    }

    emit(eventName, ...args) {
        const eventListeners = this.listeners[eventName];
        eventListeners.forEach(listener => {
            listener(...args);
        })
    }


}

const Emitter = new EventEmitter();
Emitter.addListener('foo', first);
Emitter.addListener('foo', second);
Emitter.addListener('bar', sum)
Emitter.emit('foo');
Emitter.emit('bar', 2, 5)
Emitter.removeListener('foo', second)

function first() {
    console.log('first is called')
}

function second() {
    console.log('second is called')
}

function sum(a, b) {
    console.log(`the sum is ${a + b}`)
}