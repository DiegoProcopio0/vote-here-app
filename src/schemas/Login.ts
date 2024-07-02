import { z as zod } from 'zod'

export const registerSchema = zod.object({
  nome: zod
    .string({
      required_error: 'Nome deve ser informado.',
      invalid_type_error: 'Nome deve ser uma string.',
    })
    .min(3, { message: 'Nome deve ter no mínimo 3 caracteres.' }),
  email: zod
    .string({
      required_error: 'Email deve ser informado.',
      invalid_type_error: 'Email deve ser uma string.',
    })
    .email({ message: 'Email deve ser valido.' }),
  senha: zod
    .string({
      required_error: 'Senha deve ser informada.',
      invalid_type_error: 'Senha deve ser uma string.',
    })
    .min(3, { message: 'Senha deve ter no mínimo 3 caracteres.' }),
})

export type RegisterData = zod.infer<typeof registerSchema>
