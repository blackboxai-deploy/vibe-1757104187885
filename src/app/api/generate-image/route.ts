import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const response = await fetch("https://oi-server.onrender.com/chat/completions", {
      method: "POST",
      headers: {
        "customerId": "addbrahim20@gmail.com",
        "Content-Type": "application/json",
        "Authorization": "Bearer xxx",
      },
      body: JSON.stringify({
        model: "black-forest-labs/flux-kontext-max",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the image URL from the response
    let imageUrl = "";
    
    if (data.choices && data.choices[0] && data.choices[0].message) {
      imageUrl = data.choices[0].message.content;
    } else if (data.output) {
      imageUrl = Array.isArray(data.output) ? data.output[0] : data.output;
    } else {
      imageUrl = data.url || data.image_url || data.result;
    }

    if (!imageUrl) {
      throw new Error("No image URL found in response");
    }

    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error("Error generating image:", error);
    return NextResponse.json(
      { error: "Failed to generate image" },
      { status: 500 }
    );
  }
}