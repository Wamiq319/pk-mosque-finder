import { NextRequest, NextResponse } from "next/server";
import { Event } from "@/types/event";

// GET /api/events - Get all events
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type"); // prayer, community, eid
    const city = searchParams.get("city");

    // TODO: Implement database query with filtering
    const events: Event[] = [
      {
        id: "1",
        title: "Eid al-Fitr Prayer",
        slug: "eid-al-fitr-prayer",
        description: "Community Eid prayer gathering",
        type: "prayer",
        date: "2024-04-10",
        time: "07:00",
        location: "Faisal Mosque",
        address: "Islamabad, Pakistan",
        organizer: "Faisal Mosque Committee",
        attendees: 500,
        maxAttendees: 1000,
        image: "/events/eid-prayer.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];

    return NextResponse.json({ events });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

// POST /api/events - Create a new event
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // TODO: Validate input data
    // TODO: Save to database

    const newEvent: Event = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json({ event: newEvent }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
  }
}
