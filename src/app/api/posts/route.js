import { NextResponse } from "next/server";
import connect from "../../../../lib/db";
import Post from "../../../../models/Post";

/**
 * Conatins the POST method to create or update a post.
 * @param {*} request the request passed in from page
 * @returns the created or updated post
 */
export async function POST(request) {
  try {
    const body = await request.json(); 
    await connect();

    const updateFields = {};
    if (body.goal !== undefined) {
      updateFields.goal = body.goal;
    }

    const updatedPost = await Post.findOneAndUpdate(
      { date: body.date }, 
      {
        $inc: {intake: body.intake || 0},
        $set: updateFields, 
      },
      {
        upsert: true,    
        new: true,      
        runValidators: true,
      }
    );
    return NextResponse.json(updatedPost, {status: 201});
  } 
  catch (error) {
    console.error("Error creating/updating post:", error);
    return NextResponse.json({error: error.message}, {status: 500});
  }
}