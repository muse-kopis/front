export const LockIcon = ({ isLock, setSendData }) => {
  const handleLockChange = () => {
    setSendData((prev) => ({ ...prev, visible: !isLock }))
  }
  return (
    <div style={{ cursor: 'pointer' }} onClick={handleLockChange}>
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        {isLock ? (
          <>
            <path d="M14.9814 10.0092C14.9814 8.36197 14.9814 7.53794 14.4694 7.02586C13.9573 6.51379 13.1341 6.51379 11.4861 6.51379H4.49536C2.8473 6.51379 2.02414 6.51379 1.51207 7.02586C1 7.53794 1 8.36197 1 10.0092V11.7568C1 14.2289 1 15.4645 1.76811 16.2326C2.53534 16.9999 3.77182 16.9999 6.24304 16.9999H9.7384C12.2096 16.9999 13.4461 16.9999 14.2133 16.2326C14.9814 15.4637 14.9814 14.2289 14.9814 11.7568V10.0092Z" stroke="#3C3C3C" stroke-width="1.5"/>
            <path d="M4.06137 6.51394L3.99321 5.97216C3.88238 5.08437 4.02065 4.18326 4.39256 3.36954C4.76446 2.55582 5.35535 1.86158 6.09917 1.3644C6.97765 0.777305 9.0228 0.903155 10.321 1.71625" stroke="#3C3C3C" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M11.8434 6.51398L11.9116 5.9722C12.0224 5.08441 11.8841 4.1833 11.5122 3.36958C11.1403 2.55586 10.9036 2.29887 10.321 1.71631" stroke="#3C3C3C" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M7.99084 13.5045C7.02563 13.5045 6.24316 12.7221 6.24316 11.7568C6.24316 10.7916 7.02563 10.0092 7.99084 10.0092C8.95606 10.0092 9.73853 10.7916 9.73853 11.7568C9.73853 12.7221 8.95606 13.5045 7.99084 13.5045Z" fill="#3C3C3C"/>
          </>
        ) : (
          <>
            <path d="M14.9814 10.0092C14.9814 8.36197 14.9814 7.53794 14.4694 7.02586C13.9573 6.51379 13.1341 6.51379 11.4861 6.51379H4.49536C2.8473 6.51379 2.02414 6.51379 1.51207 7.02586C1 7.53794 1 8.36197 1 10.0092V11.7568C1 14.2289 1 15.4645 1.76811 16.2326C2.53534 16.9999 3.77182 16.9999 6.24304 16.9999H9.7384C12.2096 16.9999 13.4461 16.9999 14.2133 16.2326C14.9814 15.4637 14.9814 14.2289 14.9814 11.7568V10.0092Z" stroke="#CCCCCC" stroke-width="1.5"/>
            <path d="M4.06137 6.51394L3.99321 5.97216C3.88238 5.08437 4.02065 4.18326 4.39256 3.36954C4.76446 2.55582 5.35535 1.86158 6.09917 1.3644C6.97765 0.777305 9.0228 0.903155 10.321 1.71625" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M7.9906 13.5045C7.02538 13.5045 6.24292 12.7221 6.24292 11.7568C6.24292 10.7916 7.02538 10.0092 7.9906 10.0092C8.95582 10.0092 9.73828 10.7916 9.73828 11.7568C9.73828 12.7221 8.95582 13.5045 7.9906 13.5045Z" fill="#CCCCCC"/>
          </>
        )}
      </svg>
    </div>
  )
}