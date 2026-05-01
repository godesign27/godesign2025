import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.39.7";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const range = url.searchParams.get("range") || "7d";

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    let cutoff: string | null = null;
    const now = Date.now();
    switch (range) {
      case "24h":
        cutoff = new Date(now - 24 * 60 * 60 * 1000).toISOString();
        break;
      case "7d":
        cutoff = new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString();
        break;
      case "30d":
        cutoff = new Date(now - 30 * 24 * 60 * 60 * 1000).toISOString();
        break;
      case "90d":
        cutoff = new Date(now - 90 * 24 * 60 * 60 * 1000).toISOString();
        break;
    }

    let query = supabase
      .from("page_views")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(10000);

    if (cutoff) {
      query = query.gte("created_at", cutoff);
    }

    const { data, error } = await query;

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(data || []), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
