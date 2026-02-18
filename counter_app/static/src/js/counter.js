/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

export class Counter extends Component {
    
    setup() {
        this.state = useState({ 
            value: 0,
            max: 10,  
            min: 0 ,
        });
        this.notificationService = useService("notification");
    }

    increment() {
        if (this.state.value < this.state.max){
             this.state.value++;
        } else {
            this.notificationService.add(`Maximum value (${this.state.max}) reached!`, {
                type: "warning",
            });
        }
    }

    decrement() {
        if(this.state.value > this.state.min){
            this.state.value--;
        } else {
            this.notificationService.add(`Minimum value (${this.state.min}) reached!`, {
                type: "warning",
            });
        }
    }

    reset() {
        this.state.value = this.state.min;
        this.notificationService.add("Counter reset!", { type: "info" });
    }
}

Counter.template = "counter_app.Counter"; 
registry.category("actions").add("counter_app.counter_action", Counter);
