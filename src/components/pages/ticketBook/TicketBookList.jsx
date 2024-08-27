import React, { useEffect } from "react";
import EmptyTicketBookList from "./EmptyTicketBookList";
import { Div } from "../../common/div";
import TicketBookItem from "./TicketBookItem";

const TicketBookList = ({ datas = [], getPoster, goDetail }) => {
  return (
    <Div $padding='17px 32px'>
      <Div $flex={true} $justify='start' $gap='32px 16px' $wrap={true}>
        {datas.length === 0 ? 
          <EmptyTicketBookList /> :
          datas.map(data => (
            <TicketBookItem
              key={data.id}
              data={data}
              getPoster={getPoster}
              goDetail={goDetail}
            />
          ))
        }
      </Div>
    </Div>
  )
}

export default TicketBookList;