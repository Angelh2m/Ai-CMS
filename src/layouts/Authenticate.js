

import React, { Component } from 'react'
import FormFields from '../components/FormFields/FormFields';
import { ENDPOINTS } from '../services/apiCalls';
import { handleStorage } from '../util/localStorage';


export default class Authenticate extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }

        this.setValues = this.setValues.bind(this)
        this.submitValues = this.submitValues.bind(this)
    }

    setValues(e) {
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async submitValues() {
        const x = await ENDPOINTS.login(this.state)

        if (x) { handleStorage.setToken(x.authToken) }
    }

    render() {
        return (
            <div>

                <FormFields
                    event={this.setValues}
                    className="form__field"
                    textLabel="User"
                    name='username' />

                <FormFields
                    event={this.setValues}
                    className="form__field"
                    textLabel="Password"
                    type="password"
                    name='password' />

                <button
                    onClick={this.submitValues}
                >
                    Login
                </button>
            </div>
        )
    }
}
