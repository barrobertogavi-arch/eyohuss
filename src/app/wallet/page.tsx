import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const fixtures = [
  { home: 'Barcelona', away: 'Madrid', score: '2 - 1', stage: 'La Liga', status: 'Live' },
  { home: 'Bayern', away: 'Dortmund', score: '1 - 1', stage: 'Bundesliga', status: 'FT' },
  { home: 'Inter', away: 'Juventus', score: '0 - 0', stage: 'Serie A', status: 'HT' },
];

export default function FootballPage() {
  return (
    <main className="space-y-8 pb-20 md:pb-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Football intelligence</p>
          <h1 className="text-3xl font-black">Live match center</h1>
        </div>
        <Button variant="secondary">Spatial overlays</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {fixtures.map((fixture) => (
          <Card key={`${fixture.home}-${fixture.away}`} className="p-5">
            <div className="flex items-center justify-between">
              <Badge>{fixture.stage}</Badge>
              <Badge variant="outline">{fixture.status}</Badge>
            </div>
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{fixture.home}</span>
                <span className="text-sm text-muted-foreground">Home</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">{fixture.away}</span>
                <span className="text-sm text-muted-foreground">Away</span>
              </div>
            </div>
            <div className="mt-5 rounded-2xl bg-muted p-4 text-center text-2xl font-black">{fixture.score}</div>
          </Card>
        ))}
      </div>
    </main>
  );
}
