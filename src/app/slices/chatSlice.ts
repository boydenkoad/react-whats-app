import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { ChatApi } from "../../api/api";


export interface IMassage {
  chatId: string;
  idMessage: string;
  sendByApi: boolean;
  statusMessage: string;
  textMessage:string;
  timestamp: number;
  type: string;
  typeMessage: string;
}
