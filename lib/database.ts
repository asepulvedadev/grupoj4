import { supabase } from './supabase'

export interface ContactForm {
  id?: number
  name: string
  email: string
  message: string
  created_at?: string
}

export const contactService = {
  async submitContact(formData: Omit<ContactForm, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('contacts')
      .insert([formData])
      .select()

    if (error) {
      throw error
    }

    return data
  },

  async getContacts() {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    return data
  }
}