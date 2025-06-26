import { NextRequest, NextResponse } from "next/server";
import { Mosque } from "@/types/mosque";

// GET /api/mosques - Get all mosques with optional filtering
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");
    const query = searchParams.get("q");

    // TODO: Implement database query with filtering
    // For now, return mock data
    const mosques: Mosque[] = [
      {
        id: "1",
        name: "Faisal Mosque",
        slug: "faisal-mosque",
        description: "The largest mosque in Pakistan",
        address: "Islamabad, Pakistan",
        city: "Islamabad",
        coordinates: { lat: 33.7294, lng: 73.0931 },
        prayerTimes: {
          fajr: "05:30",
          dhuhr: "12:30",
          asr: "15:45",
          maghrib: "18:30",
          isha: "20:00",
        },
        images: ["/mosques/faisal-mosque.jpg"],
        amenities: ["parking", "wudu", "library"],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];

    return NextResponse.json({ mosques });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch mosques" },
      { status: 500 }
    );
  }
}

// POST /api/mosques - Create a new mosque
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // TODO: Validate input data
    // TODO: Save to database

    const newMosque: Mosque = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json({ mosque: newMosque }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create mosque" },
      { status: 500 }
    );
  }
}
