import { Card, CardContent } from "./ui/card";

function Quote() {
  return (
    <Card className="flex h-44">
      <CardContent className="my-auto text-base">
        <span className="heading-bg mr-2">
          One of my most productive days was throwing away 1000 lines of code
        </span>
        🤣
      </CardContent>
    </Card>
  );
}

export default Quote;
