export type ResponseApi<T> = Promise<{
  data?: T
  status: number
  errors?: string[]
}>
