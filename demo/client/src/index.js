
import { info, log } from "@randajan/simple-lib/web";
import createFetch from "../../../dist/esm/client";



window.fetchApi = createFetch({
    url:`http://localhost:${info.port+1}/`,
    timeout:1000
});