import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("App error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen grid place-items-center bg-[#FFF8EB] p-5 text-center">
          <div>
            <p className="text-5xl">🧱</p>
            <h1 className="mt-4 text-2xl font-black text-[#17324D] sm:text-3xl">Oops! Something went wrong.</h1>
            <button onClick={() => window.location.reload()} className="mt-6 rounded-2xl bg-[#17324D] px-7 py-4 text-lg font-black text-white active:scale-95">Reload</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}