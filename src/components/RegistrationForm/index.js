import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isFormSubmitted: false,
    showFirstNameError: false,
    showLastNameError: false,
    firstName: '',
    lastName: '',
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  renderSuccessPage = () => (
    <div className="render-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p className="submit-text">Submitted Successfully</p>
      <button
        type="button"
        className="submit-another-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onBlurFirstName = () => {
    const validFirstName = this.validateFirstName()
    this.setState({showFirstNameError: !validFirstName})
  }

  renderFirstNameField = () => {
    const {firstName, showFirstNameError} = this.state
    const className = showFirstNameError ? 'input error-field' : 'input'

    return (
      <div className="input-container">
        <label className="label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          className={className}
          id="firstName"
          type="text"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          value={firstName}
          placeholder="First Name"
        />
      </div>
    )
  }

  onChangeLastName = event => {
    this.setState({
      lastName: event.target.value,
    })
  }

  onBlurLastName = () => {
    const validLastName = this.validateLastName()
    this.setState({showLastNameError: !validLastName})
  }

  renderLastNameField = () => {
    const {lastName, showLastNameError} = this.state
    const className = showLastNameError ? 'input error-field' : 'input'

    return (
      <div className="input-container">
        <label className="label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          className={className}
          id="lastName"
          type="text"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
          value={lastName}
          placeholder="Last Name"
        />
      </div>
    )
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const validFirstName = this.validateFirstName()
    const validLastName = this.validateLastName()

    if (validFirstName && validLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !validFirstName,
        showLastNameError: !validLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {showFirstNameError, showLastNameError} = this.state
    return (
      <form className="registration-form" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {showFirstNameError && <p className="error-msg">Required</p>}
        {this.renderLastNameField()}
        {showLastNameError && <p className="error-msg">Required</p>}
        <button className="submit-btn" type="submit">
          submit
        </button>
      </form>
    )
  }

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="app-container">
        <h1 className="form-heading">Registration</h1>
        {isFormSubmitted
          ? this.renderSuccessPage()
          : this.renderRegistrationForm()}
      </div>
    )
  }
}

export default RegistrationForm
