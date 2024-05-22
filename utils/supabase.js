import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ttqepgsvoofnusdpisry.supabase.co";
const supabaseanonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0cWVwZ3N2b29mbnVzZHBpc3J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMTU2NjAsImV4cCI6MjAzMTY5MTY2MH0.T1-7llELsDeuhMQhvtDt8JHaNyigEk8aS3CnGqdNUeM"


export const supabase = createClient(supabaseUrl, supabaseanonKey);