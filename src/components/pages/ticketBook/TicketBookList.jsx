import React from "react";
import EmptyTicketBookList from "./EmptyTicketBookList";
import { Div } from "../../common/div";
import TicketBookItem from "./TicketBookItem";

const TicketBookList = ({ datas = [], getPoster, goDetail, isShared = false, getPosterColor }) => {
  return (
    <Div $padding='17px 32px' $margin={isShared ? '60px 0 60px' : '100px 0 60px'}>
      <Div $flex={true} $justify='start' $gap='32px 16px' $wrap={true}>
        {!isShared && datas.length === 0 ? 
          <EmptyTicketBookList /> :
          datas.map(data => (
            <TicketBookItem
              key={data.id}
              data={data}
              getPoster={getPoster}
              goDetail={goDetail}
              getPosterColor={getPosterColor}
            />
          ))
        }
      </Div>
    </Div>
  )
}

export default TicketBookList;