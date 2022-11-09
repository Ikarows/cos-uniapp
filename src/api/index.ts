import { get, post } from '@/config/request'

export const login = (p = '') => get('/user/login', p)
export const postDemo = (p = '') => post('/?c=b', p)
