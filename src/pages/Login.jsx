import { useState } from "react";
import { Link } from "react-router-dom";
import {
  validateEmail,
  validatePassword,
} from "../utils/validation";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccess(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (!emailError && !passwordError) {
      setSuccess(true);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-12">

      
      <div className="absolute left-1/2 top-1/2 -z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">

        
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="text-3xl font-bold tracking-tight text-text-primary"
          >
            Nex<span className="text-primary">ora</span>
          </Link>
        </div>

        
        <div className="rounded-3xl border border-border bg-surface/70 p-7 shadow-2xl backdrop-blur-xl sm:p-9">

          <div className="text-center">
            <h1 className="text-3xl font-bold text-text-primary">
              Welcome back
            </h1>

            <p className="mt-2 text-sm text-text-secondary">
              Sign in to continue exploring Nexora.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 space-y-6"
          >

            
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-text-primary"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full rounded-xl border bg-background/60 px-4 py-3.5 text-text-primary outline-none transition placeholder:text-text-secondary ${
                  errors.email
                    ? "border-error focus:border-error"
                    : "border-border focus:border-primary"
                }`}
              />

              {errors.email && (
                <p
                  id="email-error"
                  className="mt-2 text-sm text-error"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-text-primary"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={
                    errors.password ? "password-error" : undefined
                  }
                  className={`w-full rounded-xl border bg-background/60 px-4 py-3.5 pr-16 text-text-primary outline-none transition placeholder:text-text-secondary ${
                    errors.password
                      ? "border-error focus:border-error"
                      : "border-border focus:border-primary"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-primary-light hover:text-primary"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {errors.password && (
                <p
                  id="password-error"
                  className="mt-2 text-sm text-error"
                >
                  {errors.password}
                </p>
              )}
            </div>

            
            {success && (
              <div
                role="status"
                className="rounded-xl border border-success/30 bg-success/10 px-4 py-3 text-sm text-success"
              >
                Validation successful. You're ready to continue.
              </div>
            )}

            
            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-5 py-3.5 font-semibold text-white transition hover:bg-primary-light"
            >
              Sign In
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-text-secondary">
            Want to continue browsing?{" "}
            <Link
              to="/"
              className="font-semibold text-primary-light hover:text-primary"
            >
              Back to Nexora
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;