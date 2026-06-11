import { get, put, post } from '@/config/request'

export interface UserProfile {
  id: number
  name: string
  phone: string
  org_id: number
  org_name: string
  department_id: number
  department: string
  avatar_url: string
}

export const apiGetProfile = () => get('/mini/profile', '')

export const apiUpdateProfile = (data: { name: string; avatar_url: string }) => put('/mini/profile', data)

export const apiGetPhoneNumber = (code: string) => post('/mini/profile/wechat_phone', { code })
