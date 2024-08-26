import { get, post } from './base';
import { TICKET_BOOK_URL } from '../constants/api';

export const getTicketBooksApi = async () => {
  const response = await get(TICKET_BOOK_URL.ticketBooks);
  return response;
};

export const postTicketBookApi = async (data) => {
  const response = await post(TICKET_BOOK_URL.ticketBooks, data);
  return response;
}
