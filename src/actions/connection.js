import { CONNECT } from './../constants/actiontypes';
import { httpAction } from './common'

export function connect(user) {
  return httpAction({     
        type: CONNECT,
        payload: user,
        endpoint: 'http://api.google.com' // client end point
     });
}