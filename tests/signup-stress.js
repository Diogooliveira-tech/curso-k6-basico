import http from 'k6/http'
import { sleep, check } from 'k6'

import uuid from './libs/uuid.js'

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
    };
}

export const options = {
    stages: [
        { duration: '2m', target: 100 }, // below normal load
        { duration: '5m', target: 100 },
        { duration: '2m', target: 200 }, // normal load
        { duration: '5m', target: 200 },
        { duration: '2m', target: 300 }, // around the breaking point
        { duration: '5m', target: 300 },
        { duration: '2m', target: 400 }, // beyond the breaking point
        { duration: '5m', target: 400 },
        { duration: '10m', target: 0 }, // scale down. Recovery stage.

        /* exemple: 
            {
                // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
                // stay at higher 200 users for 30 minutes
                // ramp-down to 0 users
            }
        */
    ],
    thresholds: {
        http_req_duration: ['p(95)<2000'], // 95% das requisicoes devem responder em ate 2s
        http_req_failed: ['rate<0.01'] // 1% das requisicoes podem ocorrer erro

    }
}

export default function () {
    const url = 'http://localhost:3333/signup'

    const playload = JSON.stringify(
        { email: `${uuid.v4().substring(24)}@qa.qameustestes.com.br`, password: 'pwd123' }
    )

    const headers = {
        'headers': {
            'Content-Type': 'application/json'
        }
    }

    const res = http.post(url, playload, headers);

    // console.log(res.body)

    check(res, {
        'status should be 201': (r) => r.status === 201
    })


    sleep(1);
}