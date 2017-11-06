import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

export class CraftRegistrationForm extends React.Component {
    onSubmit(values) {
        console.log(values)
        const {username, password, firstName, lastName, zipCode, yearsExperience, fieldExperience} = values;
        console.log(values)
        const user = {username, password, firstName, lastName, zipCode, yearsExperience, fieldExperience};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="register-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="firstName">First name</label>
                <Field component={Input} type="text" name="firstName" />
                <label htmlFor="lastName">Last name</label>
                <Field component={Input} type="text" name="lastName" />
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, length({min: 10, max: 72}), isTrimmed]}
                />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matches('password')]}
                />
                <label htmlFor="zipCode">ZIP Code</label>
                <Field
                    component={Input}
                    type="text"
                    name="zipCode"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="yearsExperience">Years of Experience</label>
                <Field
                    component={Input}
                    type="number"
                    name="yearsExperience"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="fieldExperience">Field of Experience</label>
                <Field
                    component="select"
                    type="select"
                    name="fieldExperience"
                    validate={[required, nonEmpty]}
                >
                    <option value=""></option>
                    <option value="plumber">Plumber</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="electrician">Electrician</option>
                    <option value="mechanic">Mechanic</option>
                </Field>
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(CraftRegistrationForm);
