import Loadable from 'react-loadable'

import Loading from './loading'

export const Home = Loadable({
  loader: () => import('../../templates/home/components'),
  loading: Loading,
})

export const NotFound = Loadable({
  loader: () => import('../../templates/404/components'),
  loading: Loading,
})
