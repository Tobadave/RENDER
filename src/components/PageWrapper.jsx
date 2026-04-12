// components/PageWrapper.jsx
const PageWrapper = ({ children }) => {
  return (
    <div className="px-6 max-w-7xl mx-auto">
      {children}
    </div>
  )
}

export default PageWrapper