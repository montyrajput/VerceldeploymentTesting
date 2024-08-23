import './index.css'

function ClickCounter() {
  return (
    <>
      <div className="sing-up-main-container">
        <form className="sign-up-form-text">
          <h2 className="sign-up-heading">CREATE AN ACCOUNT</h2>
          <label htmlFor="name" className="sing-up-label">
            Name <span className="sign-up-star">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="sign-up-input"
            placeholder="Name"
            required
          />
          <label htmlFor="username" className="sing-up-label">
            UserName <span className="sign-up-star">*</span>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="sign-up-input"
            placeholder="Username"
            required
          />
          <label htmlFor="email" className="sing-up-label">
            Email <span className="sign-up-star">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="sign-up-input"
            placeholder="Email"
            required
          />
          <label htmlFor="password" className="sing-up-label">
            Password <span className="sign-up-star">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="sign-up-input"
            placeholder="Password"
            required
          />
          <label htmlFor="mobile" className="sing-up-label">
            Mobile No <span className="sign-up-star">*</span>
          </label>
          <input
            type="number"
            id="mobile"
            name="mobile"
            className="sign-up-input"
            placeholder="Mobile No"
            required
          />

          <button type="submit" className="sign-up-button">
            Signup
          </button>
          <p className="sign-up-footer-paragraph">
            Already have an account? SingIn
          </p>
        </form>
      </div>
    </>
  )
}

export default ClickCounter
