import { PostgrestError } from "@supabase/supabase-js"

interface Props {
    res: any[]
    loading: boolean
    error: PostgrestError
}

export type { Props }