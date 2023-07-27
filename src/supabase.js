import { createClient } from "@supabase/supabase-js";
import "./index";

const supabaseUrl = process.env.REACT_APP_SUPABASEURL;

const supabaseKey = process.env.REACT_APP_SUPABASEKEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
