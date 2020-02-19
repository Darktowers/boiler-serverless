import { Router } from './server/router'

import serverless from 'serverless-http'

export const universal = serverless(Router)
