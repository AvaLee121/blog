import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Post from "../../../models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

 
  try {
    await connect();
    const posts = await Post.find(username && { username });
  
    if (!posts) {
      return new NextResponse("No posts found", { status: 404 });
    }
  
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    console.error("Database query error:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
  
};
