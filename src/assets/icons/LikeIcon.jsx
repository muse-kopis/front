import React from 'react';
import { Div } from '../../components/common/div';

export const LikeIcon = ({ type }) => {
  return (
    <Div $margin='26px 18px 23px' $alginSelf='end' $cursor={true}>
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        {type === 'unlike' ? 
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.66195 1.61593C2.27302 2.26389 1.25581 3.80598 1.25581 5.6447C1.25581 7.52274 2.0093 8.97081 3.08763 10.212C3.97758 11.2344 5.05423 12.0824 6.10409 12.9081C6.35414 13.1047 6.60112 13.3008 6.84502 13.4962C7.2854 13.851 7.67805 14.1613 8.0573 14.3878C8.43656 14.6143 8.74047 14.7169 9 14.7169C9.25953 14.7169 9.56428 14.6143 9.9427 14.3878C10.322 14.1613 10.7146 13.851 11.155 13.4962C11.3989 13.3002 11.6459 13.1044 11.8959 12.909C12.9458 12.0815 14.0224 11.2344 14.9124 10.212C15.9915 8.97081 16.7442 7.52274 16.7442 5.6447C16.7442 3.80684 15.727 2.26389 14.338 1.61593C12.9885 0.985931 11.1751 1.15262 9.45209 2.98108C9.39352 3.04313 9.3233 3.09249 9.24562 3.1262C9.16794 3.15991 9.0844 3.17728 9 3.17728C8.9156 3.17728 8.83206 3.15991 8.75438 3.1262C8.6767 3.09249 8.60648 3.04313 8.54791 2.98108C6.82493 1.15262 5.01153 0.985931 3.66195 1.61593ZM9 1.64671C7.06437 -0.122771 4.89684 -0.370669 3.13953 0.449104C1.28595 1.31675 0 3.32728 0 5.64556C0 7.92366 0.929302 9.66236 2.14912 11.0643C3.1253 12.1866 4.32 13.1261 5.37572 13.9553C5.61572 14.1433 5.84623 14.3263 6.06726 14.5041C6.49674 14.8494 6.95721 15.217 7.42353 15.4957C7.88986 15.7743 8.42233 16 9 16C9.57767 16 10.1101 15.7735 10.5765 15.4957C11.0436 15.217 11.5033 14.8494 11.9327 14.5041C12.1538 14.3263 12.3843 14.1433 12.6243 13.9553C13.6792 13.1261 14.8747 12.1858 15.8509 11.0643C17.0707 9.66236 18 7.92366 18 5.64556C18 3.32728 16.7149 1.31675 14.8605 0.450813C13.1032 -0.369814 10.9356 -0.121917 9 1.64671Z" fill="#959595"/>
          :
          <>
            <path d="M9 1.64671C7.06437 -0.122771 4.89684 -0.370669 3.13953 0.449104C1.28595 1.31675 0 3.32729 0 5.64556C0 7.92366 0.929302 9.66236 2.14912 11.0643C3.1253 12.1866 4.32 13.1261 5.37572 13.9553C5.61572 14.1433 5.84623 14.3263 6.06726 14.5041C6.49674 14.8494 6.95721 15.217 7.42353 15.4957C7.88986 15.7743 8.42233 16 9 16C9.57767 16 10.1101 15.7735 10.5765 15.4957C11.0436 15.217 11.5033 14.8494 11.9327 14.5041C12.1538 14.3263 12.3843 14.1433 12.6243 13.9553C13.6792 13.1261 14.8747 12.1858 15.8509 11.0643C17.0707 9.66236 18 7.92366 18 5.64556C18 3.32729 16.7149 1.31675 14.8605 0.450813C13.1032 -0.369814 10.9356 -0.121917 9 1.64671Z" fill="#002043"/>
            <path d="M9 1.64671C7.06437 -0.122771 4.89684 -0.370669 3.13953 0.449104C1.28595 1.31675 0 3.32729 0 5.64556C0 7.92366 0.929302 9.66236 2.14912 11.0643C3.1253 12.1866 4.32 13.1261 5.37572 13.9553C5.61572 14.1433 5.84623 14.3263 6.06726 14.5041C6.49674 14.8494 6.95721 15.217 7.42353 15.4957C7.88986 15.7743 8.42233 16 9 16C9.57767 16 10.1101 15.7735 10.5765 15.4957C11.0436 15.217 11.5033 14.8494 11.9327 14.5041C12.1538 14.3263 12.3843 14.1433 12.6243 13.9553C13.6792 13.1261 14.8747 12.1858 15.8509 11.0643C17.0707 9.66236 18 7.92366 18 5.64556C18 3.32729 16.7149 1.31675 14.8605 0.450813C13.1032 -0.369814 10.9356 -0.121917 9 1.64671Z" stroke="white"/>
          </>
        }
      </svg>
    </Div>
  )
}