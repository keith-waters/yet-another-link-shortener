import { createClient } from '@supabase/supabase-js'

export const supabase = (url:string = '', anon:string = '') => createClient(
	url || process.env.NEXT_PUBLIC_SUPABASE_URL || '',
	anon || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)
