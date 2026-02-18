/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class Counter extends Component {
    setup() {
        // Initialize state with a reactive object
        this.state = useState({ 
            value: 0,
            max:0,
            min:0
        
        });
    }

    increment() {
        if (this.state.value < this.state.max){
             this.state.value++;
        }
        
    }

    decrement() {
        if(this.state.value > this.state.min){
            this.state.value--;
        }
    }

    reset() {
        this.state.value = this.state.min;
    }
}


Counter.template = "counter_app.Counter"; 
registry.category("actions").add("counter_app.counter_action", Counter);