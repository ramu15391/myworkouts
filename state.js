import { action, observable } from 'mobx'
import React, { Component } from 'react'

export class MobxDemo extends Component{
    @observable isData = false

    @action
    setData(){
        this.isData = true
    }
}
