import { createClient } from '@supabase/supabase-js';

// Access the environment variables using `import.meta.env`
const supabaseUrl = 'https://eccohuezwxlriwsdgbex.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjY29odWV6d3hscml3c2RnYmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0OTMyMDYsImV4cCI6MjA0NTA2OTIwNn0.g8rtLImwTrzvGv35IlxI2I6aj9GFgrvHxpy2696j_Iw';

console.log('Supabase URL:', supabaseUrl); // Check if these values are correctly printed
console.log('Supabase Key:', supabaseKey);

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
