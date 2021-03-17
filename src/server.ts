import { app } from "./app";
import {port} from './config/config'

const portNumer = port || 9044;
app.listen(portNumer , () => {
    console.log(`[App]: Server listening on ${portNumer}`)
})