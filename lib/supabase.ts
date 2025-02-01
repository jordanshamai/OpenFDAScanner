import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://eguvhytjfnwnjxoagibf.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVndXZoeXRqZm53bmp4b2FnaWJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MjE5MDgsImV4cCI6MjA1Mzk5NzkwOH0.nVbSqnZV0-zrucnsOJN6WFmX793oN4ul3LqPEgAVthI"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})