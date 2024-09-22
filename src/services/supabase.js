import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://lsqjofzdmerkkecgzmng.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzcWpvZnpkbWVya2tlY2d6bW5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY4NDUwOTIsImV4cCI6MjA0MjQyMTA5Mn0.4BkOioMQXmRAnMnzJv9EfitbdpxrHs3-odobAv8Y86k';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
