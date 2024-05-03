import OgImage from "@/components/OgImage";
import Image from "next/image";
import { ImageResponse } from "next/og";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");

    const title = hasTitle ? searchParams.get("title") : "Recipe website";

    return new ImageResponse(
        <div tw="text-7xl bg-teal-600 w-full h-full text-gray-200 flex text-center items-center justify-center">
            {title}
    
        </div>,
        { width: 1200, height: 600 }
    )
}