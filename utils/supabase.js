import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASEURL;
const supabaseanonKey = process.env.NEXT_PUBLIC_SUPABASEKEY;


export const supabase = createClient(supabaseUrl, supabaseanonKey);