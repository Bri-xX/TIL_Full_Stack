import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mckmuqyqbgrbuopgybhw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ja211cXlxYmdyYnVvcGd5Ymh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzMzA2NDksImV4cCI6MjAwNDkwNjY0OX0.4t50RpTJ23neGYDuldVd8WIUeljktd73ujsDBgZjgMo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
