const supabaseUrl = 'https://iiawfqwtbnessypyohfb.supabase.co'; // Your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpYXdmcXd0Ym5lc3N5cHlvaGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1Mzc1NTksImV4cCI6MjA1NjExMzU1OX0.68WYw_cDHehb4bV2se91y9qZS4YtMeqlsLBA28UUHqQ'; // Your Supabase anon key
const { createClient } = supabase;
const supabase = createClient(supabaseUrl, supabaseKey);
