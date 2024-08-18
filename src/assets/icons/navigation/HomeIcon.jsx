import { BLACK, GRAY3 } from "../../../constants/color";

export const HomeIcon = ({ selected = false }) => {
  const fill = selected ? BLACK : GRAY3;

  return (
    <svg width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M19.25 21V13.6667C19.25 13.4235 19.1534 13.1904 18.9815 13.0185C18.8096 12.8466 18.5764 12.75 18.3333 12.75H14.6667C14.4236 12.75 14.1904 12.8466 14.0185 13.0185C13.8466 13.1904 13.75 13.4235 13.75 13.6667V21M8.25 10.9167C8.24994 10.65 8.30806 10.3865 8.42031 10.1446C8.53255 9.90266 8.69623 9.68815 8.89992 9.516L15.3166 4.01692C15.6475 3.73725 16.0667 3.58381 16.5 3.58381C16.9333 3.58381 17.3525 3.73725 17.6834 4.01692L24.1001 9.516C24.3038 9.68815 24.4674 9.90266 24.5797 10.1446C24.6919 10.3865 24.7501 10.65 24.75 10.9167V19.1667C24.75 19.6529 24.5568 20.1192 24.213 20.463C23.8692 20.8068 23.4029 21 22.9167 21H10.0833C9.5971 21 9.13079 20.8068 8.78697 20.463C8.44315 20.1192 8.25 19.6529 8.25 19.1667V10.9167Z" 
        stroke={fill} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M0.8 27.3H1.34V35H0.8V27.3ZM3.74 29.28C4.26 29.28 4.7 29.3833 5.06 29.59C5.42 29.7967 5.69333 30.1 5.88 30.5C6.07333 30.8933 6.17 31.3733 6.17 31.94V35H5.63V32.05C5.63 31.2967 5.46 30.73 5.12 30.35C4.78 29.9633 4.28 29.77 3.62 29.77C3.16667 29.77 2.76667 29.8733 2.42 30.08C2.08 30.2867 1.81333 30.5767 1.62 30.95C1.43333 31.3167 1.34 31.7433 1.34 32.23L1.06 31.96C1.09333 31.42 1.22667 30.95 1.46 30.55C1.69333 30.15 2.00667 29.84 2.4 29.62C2.79333 29.3933 3.24 29.28 3.74 29.28ZM10.5745 35.12C9.93453 35.12 9.3712 34.9967 8.88453 34.75C8.39786 34.5033 8.01786 34.16 7.74453 33.72C7.4712 33.28 7.33453 32.7733 7.33453 32.2C7.33453 31.62 7.4712 31.1133 7.74453 30.68C8.01786 30.24 8.39786 29.8967 8.88453 29.65C9.3712 29.4033 9.93453 29.28 10.5745 29.28C11.2145 29.28 11.7779 29.4033 12.2645 29.65C12.7512 29.8967 13.1312 30.24 13.4045 30.68C13.6779 31.1133 13.8145 31.62 13.8145 32.2C13.8145 32.7733 13.6779 33.28 13.4045 33.72C13.1312 34.16 12.7512 34.5033 12.2645 34.75C11.7779 34.9967 11.2145 35.12 10.5745 35.12ZM10.5745 34.61C11.1212 34.61 11.5945 34.51 11.9945 34.31C12.3945 34.11 12.7045 33.83 12.9245 33.47C13.1445 33.11 13.2545 32.6867 13.2545 32.2C13.2545 31.7133 13.1445 31.29 12.9245 30.93C12.7045 30.57 12.3945 30.29 11.9945 30.09C11.5945 29.89 11.1212 29.79 10.5745 29.79C10.0345 29.79 9.5612 29.89 9.15453 30.09C8.75453 30.29 8.44453 30.57 8.22453 30.93C8.00453 31.29 7.89453 31.7133 7.89453 32.2C7.89453 32.6867 8.00453 33.11 8.22453 33.47C8.44453 33.83 8.75453 34.11 9.15453 34.31C9.5612 34.51 10.0345 34.61 10.5745 34.61ZM14.8078 29.4H15.3478L15.6478 31.19V35H15.1078V31.11L14.8078 29.4ZM17.8578 29.28C18.3311 29.28 18.7345 29.3833 19.0678 29.59C19.4011 29.7967 19.6545 30.1 19.8278 30.5C20.0011 30.8933 20.0878 31.3733 20.0878 31.94V35H19.5478V32.05C19.5478 31.2967 19.3945 30.73 19.0878 30.35C18.7811 29.9633 18.3311 29.77 17.7378 29.77C17.3178 29.77 16.9511 29.8733 16.6378 30.08C16.3245 30.2867 16.0811 30.5767 15.9078 30.95C15.7345 31.3167 15.6478 31.7433 15.6478 32.23L15.3678 31.96C15.4011 31.42 15.5245 30.95 15.7378 30.55C15.9578 30.15 16.2478 29.84 16.6078 29.62C16.9745 29.3933 17.3911 29.28 17.8578 29.28ZM22.2978 29.28C22.7711 29.28 23.1745 29.3833 23.5078 29.59C23.8411 29.7967 24.0945 30.1 24.2678 30.5C24.4411 30.8933 24.5278 31.3733 24.5278 31.94V35H23.9878V32.05C23.9878 31.2967 23.8345 30.73 23.5278 30.35C23.2211 29.9633 22.7711 29.77 22.1778 29.77C21.7578 29.77 21.3911 29.8733 21.0778 30.08C20.7645 30.2867 20.5211 30.5767 20.3478 30.95C20.1745 31.3167 20.0878 31.7433 20.0878 32.23L19.8078 31.96C19.8411 31.42 19.9645 30.95 20.1778 30.55C20.3978 30.15 20.6878 29.84 21.0478 29.62C21.4145 29.3933 21.8311 29.28 22.2978 29.28ZM28.9041 35.12C28.2708 35.12 27.7108 34.9967 27.2241 34.75C26.7441 34.5033 26.3675 34.16 26.0941 33.72C25.8275 33.28 25.6941 32.7733 25.6941 32.2C25.6941 31.62 25.8208 31.1133 26.0741 30.68C26.3341 30.24 26.6908 29.8967 27.1441 29.65C27.5975 29.4033 28.1241 29.28 28.7241 29.28C29.3041 29.28 29.8141 29.4067 30.2541 29.66C30.6941 29.9133 31.0375 30.2667 31.2841 30.72C31.5308 31.1667 31.6541 31.6867 31.6541 32.28H26.0641V31.8H31.5241L31.0941 32.1C31.0741 31.6333 30.9641 31.2267 30.7641 30.88C30.5641 30.5333 30.2875 30.2667 29.9341 30.08C29.5875 29.8867 29.1841 29.79 28.7241 29.79C28.2241 29.79 27.7875 29.89 27.4141 30.09C27.0475 30.29 26.7608 30.57 26.5541 30.93C26.3541 31.29 26.2541 31.7133 26.2541 32.2C26.2541 32.6867 26.3641 33.11 26.5841 33.47C26.8041 33.83 27.1108 34.11 27.5041 34.31C27.9041 34.51 28.3708 34.61 28.9041 34.61C29.3975 34.61 29.8608 34.5233 30.2941 34.35C30.7275 34.1767 31.1241 33.9467 31.4841 33.66V34.17C31.1375 34.4633 30.7308 34.6967 30.2641 34.87C29.7975 35.0367 29.3441 35.12 28.9041 35.12Z" 
        fill={fill}
      />
    </svg>
  )
}



