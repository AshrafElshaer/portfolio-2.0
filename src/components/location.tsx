"use client";
import ReactMapGl from "react-map-gl";
import { Card, CardContent, CardHeader } from "./ui/card";

function Location() {
  const mapStyles = "mapbox://styles/mapbox/dark-v11";
  return (
    <Card className="h-40 overflow-hidden">
      <CardHeader>
        <h3 className="">location</h3>
        <span className="text-muted-foreground">TX , USA 🇺🇸 </span>
      </CardHeader>
      <CardContent className="flex h-full items-stretch overflow-hidden p-0">
        <ReactMapGl
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={{
            longitude: -96.615021,
            latitude: 36.19796,
            zoom: 1.5,
          }}
          style={{ flex: 1, height: "100%", width: "100%" }}
          mapStyle={mapStyles}
          minZoom={1.5}
          maxZoom={4}
          onMouseOver={(e) => {
            e.target.flyTo({
              zoom: 3.5,
              center: [-99.9018, 31.9686],
            });
          }}
          onMouseOut={(e) => {
            e.target.flyTo({
              zoom: 1.5,
              center: [-96.615021, 36.19796],
            });
          }}
        ></ReactMapGl>
      </CardContent>
    </Card>
  );
}

export default Location;
