import { createStore } from "redux";
import {counterProvider} from "./provider";
export const store = createStore(counterProvider);
