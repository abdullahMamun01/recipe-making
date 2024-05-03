import OgImage from "@/components/OgImage";
import Image from "next/image";
import { ImageResponse } from "next/og";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");
    const hasUrl = searchParams.has("url")
    const url = hasUrl ? searchParams.get('url') : 'https://source.unsplash.com/random/800x600?recipe'
    return new ImageResponse(
        <div 
        style={{
            fontSize: 48,
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <img tw="w-96 h-96 object-cover" src={url} width={100} height={100} alt="title" />
        </div>,
        { width: 800, height: 600 }
    )
}